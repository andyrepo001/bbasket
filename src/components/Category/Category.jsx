import styles from "./Category.module.css";
import Image from "next/image";

export default function Category({ item }) {
  return (
    <div
      className={styles.category}
      style={{ backgroundColor: `${item?.color}` }}
    >
      <Image src={item?.image} alt="" className={styles.category_image} />
      <a href="/category/{item?.label}">
        <h6 className={styles.category_title}>{item?.label}</h6>
      </a>
    </div>
  );
}
