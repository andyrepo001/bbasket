import { inter } from "@/fonts/fonts";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Cart from "@/components/Cart/Cart";
import ContextProvider from "@/context/contextProvider";

export const metadata = {
  title: "Next App",
  description: "Next.js starter app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          {/* <Cart /> */}
          <Navbar />
          {children}
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
