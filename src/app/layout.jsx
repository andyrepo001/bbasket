import { poppins } from "@/fonts/fonts";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Cart from "@/components/Cart/Cart";
import Features from "@/components/Features/Features";
import Panel from "@/components/Navbar/Panel/Panel";

export const metadata = {
  title: "Borobasket",
  description: "Borobasket ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Cart />
        <Navbar />
        <Panel />
        {children}
        <Features />
        <Footer />
      </body>
    </html>
  );
}
