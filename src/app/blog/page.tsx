import { Metadata } from "next";

const posts = [
  {
    name: "Как самостоятельно создать турецкий аккаунт?",
    url: "/blog/kak_samomu_sozdat_tureckiy_akaunt",
  },
  {
    name: "Расписание нашей работы в новогодние праздники",
    url: "/blog/raspisanie_raboti_v_nogodnie_prazdniki",
  },
];

export const metadata: Metadata = {
  title: "Блог сервиса МнеПодписку",
  description: "Исследуйте наш блог: все посты на одной странице. Узнавайте последние новости и интересные статьи в одном месте!",
  openGraph: {
    title: "Блог сервиса МнеПодписку",
    description: "Исследуйте наш блог: все посты на одной странице. Узнавайте последние новости и интересные статьи в одном месте!",
    images: ["/og_images_generated/blog/og_image.png"],
    url: "/blog",
    type: "website",
  },
  alternates: {
    canonical: "/blog",
  },
};

function Blog() {
  return (
    <div className="flex flex-col w-full max-w-screen-lg mx-auto mt-8 sm:mt-10 px-2 sm:px-4 mb-8 items-start">
      <h1 className="text-3xl font-semibold tracking-tight">Блог</h1>

      <div className="flex flex-wrap gap-4 my-4">
        {posts.map((item) => {
          return (
            <a className="p-3 lg:text-lg rounded-lg bg-secondary text-white font-medium" key={item.url} href={item.url}>
              <p>{item.name}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
