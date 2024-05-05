import { inter } from "@/fonts/fonts";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Cart from "@/components/Cart/Cart";
import Features from "@/components/Features/Features";

export const metadata = {
  title: "Borobasket",
  description: "Borobasket ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Cart />
        <Navbar />
        {children}
        <Features />
        <Footer />
      </body>
    </html>
  );
}
