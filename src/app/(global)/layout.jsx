import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";

export default function layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
