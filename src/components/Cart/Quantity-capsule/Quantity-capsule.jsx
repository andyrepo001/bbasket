import Image from "next/image";
import styles from "./Quantity-capsule.module.css";
import plus from "@/assets/plus.png";
import minus from "@/assets/minus.png";

export default function QuantityCapsule({ quantity, increase, decrease }) {
  return (
    <div className={styles.quantity_capsule}>
      <Image
        src={plus}
        alt="increase quantity"
        className={styles.capsule_icon}
        onClick={increase}
      />
      <span className={styles.quantity}>{quantity}</span>
      <Image
        src={minus}
        alt="decrease quantity"
        className={styles.capsule_icon}
        onClick={decrease}
      />
    </div>
  );
}
