type VkResponse = {
  items: {
    date: number;
    from_id: number;
    id: number;
    text: string;
  }[];
  profiles: {
    id: number;
    sex: number;
    screen_name: string;
    photo_50: string;
    photo_100: string;
    online_info: {
      visible: boolean;
      last_seen: number;
      is_online: boolean;
      app_id: number;
      is_mobile: boolean;
    };
    online: number;
    first_name: string;
    last_name: string;
    can_access_closed: boolean;
    is_closed: boolean;
  }[];
};

type WbResponse = {
  id: string;
  text: string;
  productValuation: number;
  createdDate: string;
  answer: {
    text: string;
    state: string;
    editable: boolean;
  };
  state: string;
  productDetails: {
    imtId: number;
    nmId: number;
    productName: string;
    supplierArticle: string;
    supplierName: string;
    brandName: string;
    size: string;
  };
  video: string;
  wasViewed: boolean;
  photoLinks: string;
  userName: string;
  matchingSize: string;
  isAbleSupplierFeedbackValuation: boolean;
  supplierFeedbackValuation: number;
  isAbleSupplierProductValuation: boolean;
  supplierProductValuation: number;
  isAbleReturnProductOrders: boolean;
  returnProductOrdersDate: boolean;
  bables: boolean;
};

// function shuffleArray<T>(array: T[]): T[] {
//   let currentIndex = array.length;
//   let temporaryValue: T;
//   let randomIndex: number;

//   // While there remain elements to shuffle...
//   while (currentIndex !== 0) {
//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     // And swap it with the current element.
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }

//   return array;
// }

// Combine two arrays and shuffle the items
// function combineAndShuffleArrays(array1: any[], array2: any[]): any[] {
//   // Combine arrays
//   const combinedArray = array1.concat(array2);

//   // Shuffle the combined array
//   const shuffledArray = shuffleArray(combinedArray);

//   return shuffledArray;
// }

export async function GET() {
  try {
    const commentsVk = await fetch(
      "https://api.vk.com/method/board.getComments?group_id=221413404&topic_id=49184185&count=100&sort=desc&v=5.199&extended=true",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.VK_SERVICE_KEY}`,
        },
        next: { revalidate: 60 * 60 * 24 },
      }
    );

    if (commentsVk.status !== 200) {
      return new Response("vk request response is not 200", {
        status: 500,
      });
    }

    const result: VkResponse = (await commentsVk.json()).response;

    if (result === undefined || result.items === undefined || result.profiles === undefined) {
      return new Response("undefined vk result", {
        status: 500,
      });
    }

    const comments = result.items.filter((item) => item.from_id !== -221413404);

    const reviewsVk = result.profiles.map((item) => {
      const comment = comments.find((item_comment) => item_comment.from_id === item.id);
      return {
        review: comment!.text.replace(/\[club221413404:bp-221413404_4\|МнеПодписку\], /, ""),
        name: item.first_name,
        platform: "VK",
        link: `https://vk.com/topic-221413404_49184185?post=${comment!.id}`,
        date: comment!.date,
      };
    });

    const wbRequestReviews = await fetch(
      "https://feedbacks-api.wildberries.ru/api/v1/feedbacks?isAnswered=true&take=100&skip=0&order=dateDesc",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.WB_GET_REVIEWS_TOKEN}`,
        },
        next: { revalidate: 60 * 60 * 24 },
      }
    );

    if (wbRequestReviews.status !== 200) {
      return new Response("wb request response is not 200", {
        status: 500,
      });
    }

    const res = await wbRequestReviews.json();

    if (res.data === undefined || res.data.feedbacks === undefined) {
      return new Response("wb request undefined", {
        status: 500,
      });
    }

    const wbRes: WbResponse[] = res.data.feedbacks;

    const filteredReviewsWb = wbRes.filter((item) => item.text);

    const finalReviewsWb = filteredReviewsWb.map((item) => {
      return {
        review: item.text,
        name: item.userName !== "" ? item.userName : "Покупатель",
        platform: "WB",
        rating: item.productValuation,
        link: `https://www.wildberries.ru/catalog/${item.productDetails.nmId}/feedbacks?imtId=${item.productDetails.imtId}&size=${item.productDetails.size}#${item.id}`,
        date: new Date(item.createdDate).getTime() / 1000,
        reply: item.answer.text,
      };
    });

    const combined = [...reviewsVk, ...finalReviewsWb];

    combined.sort((a, b) => b.date - a.date);

    return Response.json(combined);
  } catch (err) {
    console.log("error in api/reviews/get_reviews/", err);
    return new Response("Unexpected error", {
      status: 500,
    });
  }
}
