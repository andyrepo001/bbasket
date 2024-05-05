import styles from "./Dropdown-bar.module.css";
import { getServerSideData } from "@/lib/api-calls";
import Icon from "@/components/Icon/Icon";
import demo from "@/assets/icon_baby-products.png";
import arrow from "@/assets/arrow.png";
import Image from "next/image";

export default async function DropdownBar() {
  const categories = await getServerSideData("item_categories");

  return (
    <div className={styles.dropdown_bar}>
      {categories?.data?.map((category, indx) => (
        <div className={styles.dropdown_item} key={indx}>
          <Icon src={demo} />
          <h4 className={styles.dropdown_item_text}>{category?.cat_name_en}</h4>
          <Image src={arrow} alt="arrow" className={styles.dropdown_icon} />
        </div>
      ))}
    </div>
  );
}
