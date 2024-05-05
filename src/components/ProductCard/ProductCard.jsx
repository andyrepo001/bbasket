"use client";
import styles from "./ProductCard.module.css";
import Image from "next/image";
import Button from "../Button/Button";
import Container from "../Container/Container";
import basket from "@/assets/basket.png";
import { useCartStore } from "@/hooks/use-cart.js";

export default function ProductCard({ item }) {
  const cart = useCartStore();

  return (
    <div className={styles.product_card}>
      <Container>
        <div className={styles.image_wrapper}>
          <Image
            src={item.image}
            alt={item?.title}
            className={styles.product_image}
          />
        </div>
        <div className={styles.details}>
          <a href="/">
            <h3 className={styles.title}>{item?.title}</h3>
          </a>
          <h3 className={styles.weight}>{item?.weight}gm</h3>
          <span className={styles.price_wrapepr}>
            <h4 className={styles.price}>৳ {item?.price}</h4>
            <h3 className={styles.discounted_price}>
              ৳ {item?.discountedPrice}
            </h3>
          </span>
          <Button
            icon={basket}
            label="add to basket"
            handleAction={() => cart.addToCart(item)}
          />
        </div>
      </Container>
    </div>
  );
}
