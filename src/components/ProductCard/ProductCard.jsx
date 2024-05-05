"use client";
import styles from "./ProductCard.module.css";
import Image from "next/image";
import Button from "../Button/Button";
import basket from "@/assets/basket.png";
import demo from "@/assets/cat.jpg";
import { useCartStore } from "@/hooks/use-cart.js";

export default function ProductCard({ item }) {
  const cart = useCartStore();

  return (
    <div className={styles.product_card}>
      <div className={styles.image_wrapper}>
        <Image
          src={demo}
          alt={item?.title}
          className={styles.product_image}
          layout="fill"
        />
      </div>
      <div className={styles.details}>
        <a href="/">
          <h3 className={styles.title}>
            {item?.item_name_en} another line force third line force fourth line
          </h3>
        </a>
        <h3 className={styles.weight}>{item?.weight}gm</h3>

        <span className={styles.price_wrapepr}>
          <h4
            className={`${styles.price} ${
              item?.discounted_price > 0 ? styles.crossed : ""
            }`}
          >
            ৳ {item?.item_price}
          </h4>

          <h3
            className={`${styles.discounted_price} ${
              item?.discounted_price <= 0 ? styles.hidden : ""
            }`}
          >
            ৳ {item?.discounted_price}
          </h3>
        </span>
        <Button
          icon={basket}
          label="add to basket"
          handleAction={() => cart.addToCart(item)}
        />
      </div>
    </div>
  );
}
