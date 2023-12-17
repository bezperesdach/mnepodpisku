import { Metadata } from "next";

const posts = [
  {
    name: "Как самостоятельно создать турецкий аккаунт?",
    url: "/blog/kak_samomu_sozdat_tureckiy_akaunt",
  },
];

export const metadata: Metadata = {
  title: "Блог сервиса МнеПодписку",
  description: "Исследуйте наш блог: все посты на одной странице. Узнавайте последние новости и интересные статьи в одном месте!",
  openGraph: {
    title: "Блог сервиса МнеПодписку",
    description: "Исследуйте наш блог: все посты на одной странице. Узнавайте последние новости и интересные статьи в одном месте!",
    url: "/blog",
    images: ["/og_images/blog/blog.png"],
  },
  alternates: {
    canonical: "/blog",
  },
};

function Blog() {
  return (
    <div className="flex flex-col w-full max-w-[1240px] mx-auto mt-8 sm:mt-10 px-2 sm:px-4 mb-8 items-start">
      <h1 className="text-3xl lg:text-4xl font-bold">Блог</h1>

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
