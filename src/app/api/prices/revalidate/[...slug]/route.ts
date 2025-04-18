//uses REVALIDATE_REVIEWS_SECRET as slug to revalidate reviews

import { revalidateTag } from "next/cache";

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  const slug = params.slug[0];

  if (!slug) {
    return new Response("", {
      status: 500,
    });
  }

  if (slug !== process.env.REVALIDATE_PRICES_SECRET) {
    return new Response("", {
      status: 500,
    });
  }

  const date = new Date().toLocaleString("en-GB", {
    timeZone: "Europe/Moscow",
  });

  const red = "\x1b[31m";
  const reset = "\x1b[0m"; // Reset color

  console.log(`${red}${date}${reset}: Revalidate prices route was accessed using REVALIDATE_PRICES_SECRET`);

  revalidateTag("price");

  return new Response("Revalidated");
}
