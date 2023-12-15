import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function MainLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar isNotFound />

      <main className="h-[calc(100%-260px)] flex flex-col justify-center items-center flex-1">{children}</main>

      <Footer />
    </>
  );
}
