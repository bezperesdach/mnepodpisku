//uses REVALIDATE_REVIEWS_SECRET as slug to revalidate reviews

import { revalidatePath } from "next/cache";

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  const slug = params.slug[0];

  if (!slug) {
    return new Response("", {
      status: 500,
    });
  }

  if (slug !== process.env.REVALIDATE_REVIEWS_SECRET) {
    return new Response("", {
      status: 500,
    });
  }

  console.log("Revalidate reviews route was accessed using REVALIDATE_REVIEWS_SECRET");

  revalidatePath("/api/reviews/get_reviews");
  revalidatePath("/api/reviews/get_reviews_count");

  return new Response("Revalidated");
}
