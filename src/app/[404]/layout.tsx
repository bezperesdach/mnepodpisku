import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function ErrorLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-[100svh]">
      <Navbar isNotFound />
      {children}
      <Footer />
    </div>
  );
}
