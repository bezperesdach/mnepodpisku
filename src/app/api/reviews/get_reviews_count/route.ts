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
        next: { revalidate: 60 * 60 * 24 * 7 },
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

    return Response.json({ amount: Math.floor(comments.length / 10) * 10 });
  } catch (err) {
    console.log("error in api/reviews/get_reviews/", err);
    return new Response("Unexpected error", {
      status: 500,
    });
  }
}
