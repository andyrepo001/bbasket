"use client";
import styles from "./Cart.module.css";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import Icon from "../Icon/Icon";
import groceries from "@/assets/groceries.png";
import close from "@/assets/close.png";
import { useCartStore } from "@/hooks/use-cart.js";
import { useState } from "react";
import { useCartSidebar } from "@/hooks/use-cart-sidebar";

export default function Cart() {
  const cartSidebar = useCartSidebar();
  const cart = useCartStore();

  return (
    <div
      className={`${styles.cart} ${cartSidebar.isOpen ? styles.visible : ""}`}
    >
      <div className={styles.cart_wrapper}>
        {/* <!-- Cart header --> */}
        <div className={styles.cart_top}>
          <div className={styles.cart_indicator}>
            <Icon src={groceries} />
            <span>my basket items</span>
          </div>
          <Icon src={close} handleAction={cartSidebar.onClose} />
        </div>
        {/* <!-- Cart items --> */}
        <div className={styles.cart_content}>
          {cart.cartItems.map((item, indx) => (
            <CartItem key={indx} item={item} />
          ))}
        </div>

        {/* <!-- Cart total --> */}
        <div className={styles.cart_bottom}>
          <div className={styles.bottom_content}>
            <div className={styles.cart_total}>
              <p>sub total</p>
              <p>৳ 00</p>
            </div>
            <div className={styles.cart_total}>
              <p>delivery charge</p>
              <p>৳ 00</p>
            </div>
            <div className={styles.cart_total}>
              <h6>grand total</h6>
              <p>৳ 00</p>
            </div>
            <Button label="register / login" full />
          </div>
        </div>
      </div>
    </div>
  );
}
