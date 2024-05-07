"use client";
import styles from "./CartItem.module.css";
import Button from "../Button/Button";
import { useCartStore } from "@/hooks/use-cart.js";

export default function CartItem({ item }) {
  const cart = useCartStore();
  return (
    <div className={styles.cart_item}>
      <div className={styles.cart_item_info}>
        <h4 className={`${styles.col} ${styles.cart_item_title}`}>
          {item?.item_name_en}
        </h4>
        <p className={styles.col}>
          {item?.quantity} x {item?.item_price}৳
        </p>
        <p className={styles.col}>{item?.quantity * item?.item_price}৳</p>
      </div>
      <div className={styles.cart_item_manage}>
        <Button label="update" primary />
        <Button
          label="remove"
          destroy
          handleAction={() => cart.remove(item?.item_id)}
        />
      </div>
    </div>
  );
}
