export const dynamic = "force-static";
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
      <main className="min-h-[calc(100vh-260px)]">{children}</main>
      <Footer />
    </>
  );
}
