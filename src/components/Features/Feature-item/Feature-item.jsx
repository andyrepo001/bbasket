import styles from "./Feature-item.module.css";
import Image from "next/image";

export default function FeatureItem({ feature }) {
  return (
    <div className={styles.feature_item}>
      <Image src={feature.image} alt="" className={styles.feature_item_image} />
      <div className={styles.feature_item_text}>
        <h6 className={styles.feature_header}>{feature.label}</h6>
        <p className={styles.feature_tag}>{feature.tag}</p>
      </div>
    </div>
  );
}
