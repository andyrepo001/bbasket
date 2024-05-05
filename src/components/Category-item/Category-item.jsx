import Link from "next/link";
import styles from "./Category-item.module.css";
import Image from "next/image";
import demo from "@/assets/babyProducts.png";

export default function CategoryItem({ item }) {
  return (
    <div
      className={styles.category}
      style={{ backgroundColor: `#${item?.cat_icon_bg}` }}
    >
      <Image
        src={demo}
        alt={item?.cat_name_en}
        className={styles.category_image}
      />
      <Link href={`/category/${item?.cat_name_en}`}>
        <h6 className={styles.category_title}>{item?.cat_name_en}</h6>
      </Link>
    </div>
  );
}
