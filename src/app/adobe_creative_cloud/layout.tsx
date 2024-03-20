import { Footer } from "@/components/footer";
import { MainNavbar } from "@/components/ui/main-navbar";

export default function MainLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainNavbar colorPallette="adobe_creative_cloud" />
      {children}
      <Footer />
    </>
  );
}
