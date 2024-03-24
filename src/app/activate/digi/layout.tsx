import { Footer } from "@/components/footer";
import { MainNavbar } from "@/components/ui/main-navbar";

export default function ErrorLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainNavbar />
      <main className="min-h-[calc(100vh-334px)] flex flex-col justify-center items-center flex-1">{children}</main>
      <Footer />
    </>
  );
}
