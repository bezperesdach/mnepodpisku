export const dynamic = "force-static";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function MainLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
