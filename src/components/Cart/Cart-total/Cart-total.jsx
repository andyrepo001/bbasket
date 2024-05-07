"use client";
import styles from "./Cart-total.module.css";
import { useCartStore } from "@/hooks/use-cart.js";

export default function CartTotal() {
  const cart = useCartStore();
  return (
    <div className={styles.cart_bottom}>
      <div className={styles.bottom_content}>
        <div className={styles.cart_total}>
          <p>sub total</p>
          <p>৳ {cart?.total}</p>
        </div>
        <div className={styles.cart_total}>
          <p>delivery charge</p>
          <p>৳ 0</p>
        </div>
        <div className={styles.cart_total}>
          <h6 className={styles.grand_total}>grand total</h6>
          <p>৳ {cart?.total}</p>
        </div>
      </div>
    </div>
  );
}
