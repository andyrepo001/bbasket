"use client";
import { useEffect, useState } from "react";
import styles from "./Checkout.module.css";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import { useLoginModal } from "@/hooks/use-login-modal";
import Header from "@/components/Header/Header";
import Container from "@/components/Container/Container";
import CartItem from "@/components/Cart/CartItem/CartItem";
import { useCartStore } from "@/hooks/use-cart.js";
import Select from "@/components/Select/Select";
import Input from "@/components/Input/Input";
import CartTotal from "@/components/Cart/Cart-total/Cart-total";

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
            {/* Total */}
            <CartTotal />
          </div>
          <div className={styles.checkout_col}>
            <Header header="my basket items" />
            <div className={styles.delivery_time}>
              <Select required label="Want to receive by..." />
              <Select required label="On time of..." />
            </div>

            <Header header="delivery location" />
            <div className={styles.location}>
              <Select required label="Location" />
              <Input full label="Contact Person" border required type="text" />
              <Input full label="mobile" border required type="number" />
              <Input full label="address" border required type="text" />
            </div>

            <Header header="payment options" />
          </div>
        </div>
      </div>
    </Container>
  );
}
