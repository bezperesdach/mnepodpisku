import Footer from "@/components/Footer/Footer";
import { MainNavbar } from "@/components/ui/main-navbar";

export default function MainLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainNavbar />
      {children}
      {/* <Footer /> */}
    </>
  );
}
