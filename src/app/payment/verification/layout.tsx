import { Footer } from "@/components/footer";
import { MainNavbar } from "@/components/ui/main-navbar";

export default function MainLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainNavbar />

      <main className="min-h-[calc(100vh-334px)] flex flex-col justify-start items-center flex-1 w-full">{children}</main>

      <Footer />
    </>
  );
}
