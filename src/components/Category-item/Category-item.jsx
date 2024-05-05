import Link from "next/link";
import styles from "./Category-item.module.css";
import Image from "next/image";

export default function CategoryItem({ item }) {
  return (
    <div
      className={styles.category}
      style={{ backgroundColor: `${item?.color}` }}
    >
      <Image
        src={item?.image}
        alt={item?.label}
        className={styles.category_image}
      />
      <Link href={`/category/${item?.label}`}>
        <h6 className={styles.category_title}>{item?.label}</h6>
      </Link>
    </div>
  );
}
