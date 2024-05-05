import styles from "./Feature-item.module.css";
import Image from "next/image";
import demo from "@/assets/icon_payment.png";

export default function FeatureItem() {
  return (
    <div className={styles.feature_item}>
      <Image src={demo} alt="" className={styles.feature_item_image} />
      <div className={styles.feature_item_text}>
        <h6 className={styles.feature_header}>Easy Payment Options</h6>
        <p className={styles.feature_tag}>From COD, Bkash or Credit Card</p>
      </div>
    </div>
  );
}
