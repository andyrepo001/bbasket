"use client";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Container from "../Container/Container";
import Hamburger from "../Hamburger/Hamburger";
import Icon from "../Icon/Icon";
import Input from "../Input/Input";
import Logo from "../Logo/Logo";
import search from "@/assets/search.png";
import shopping from "@/assets/shoppingbag.png";
import { useCartSidebar } from "@/hooks/use-cart-sidebar";
import { useEffect, useState } from "react";
import { useCartStore } from "@/hooks/use-cart.js";

export default function Navbar() {
  const cartSidebar = useCartSidebar();
  const cart = useCartStore();
  const [cartQuantity, setCartQuantity] = useState(0);
  useEffect(() => {
    setCartQuantity(cart.cartItems.reduce((a, b) => a + b.quantity, 0));
  }, [cart.cartItems]);

  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles.navbar_wrapper}>
          <div className={styles.logo_wrapper}>
            <Hamburger />
            <Logo />
          </div>
          <div className={styles.search_bar}>
            <Input full placeholder={"Search for products"} />
            <Image
              src={search}
              alt="search icon"
              className={styles.search_icon}
            />
          </div>
          <div className={styles.cart_wrapper} onClick={cartSidebar.onOpen}>
            <div className={styles.col}>
              <div className={styles.cart}>
                <Icon src={shopping} alt="shopping bag" />
                <span className={styles.total_number}>{cartQuantity}</span>
              </div>
              <span className={styles.total_amount}>৳ 00</span>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}
