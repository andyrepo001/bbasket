"use client";
import { useEffect, useState } from "react";
import styles from "./Checkout.module.css";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import { useLoginModal } from "@/hooks/use-login-modal";
import Header from "@/components/Header/Header";
import Container from "@/components/Container/Container";
import CartItem from "@/components/CartItem/CartItem";
import { useCartStore } from "@/hooks/use-cart.js";
import Select from "@/components/Select/Select";
import Input from "@/components/Input/Input";

export default function Checkout() {
  const [user, setUser] = useState(null);
  const cart = useCartStore();

  useEffect(() => {
    setUser(getCookie("bcli"));
  }, []);

  // if (!user) {
  //   return;
  // }

  return (
    <Container>
      <div className={styles.checkout}>
        <div className={styles.checkout_wrapper}>
          <div className={styles.checkout_col}>
            <Header header="my basket items" />
            <div className={styles.checkout_products}>
              {/* All products visible here */}
              {cart.cartItems?.map((item, indx) => (
                <CartItem item={item} key={indx} />
              ))}
            </div>
          </div>
          <div className={styles.checkout_col}>
            <Header header="my basket items" />
            <div className={styles.delivery_time}>
              <Select />
              <Select />
            </div>

            <Header header="delivery location" />
            <div className={styles.location}>
              <Select required />
              <Input full placeholder="name" border />
              <Input full placeholder="name" border />
              <Input full placeholder="name" border />
            </div>

            <Header header="payment options" />
          </div>
        </div>
      </div>
    </Container>
  );
}
