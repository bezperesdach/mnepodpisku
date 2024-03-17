import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[100svh]">
      {/* <Navbar isNotFound /> */}
      <main className="h-[calc(100%-260px)] flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">404</h1>
        <h2 className="text-xl font-semibold">Страница не найдена</h2>
        <Link className="btn btn-secondary text-white mt-4" href="/">
          На главную
        </Link>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
