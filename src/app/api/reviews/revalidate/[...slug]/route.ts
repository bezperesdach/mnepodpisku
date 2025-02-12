//uses REVALIDATE_REVIEWS_SECRET as slug to revalidate reviews

import { revalidateTag } from "next/cache";

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

  revalidateTag("review");

  return new Response("Revalidated");
}
