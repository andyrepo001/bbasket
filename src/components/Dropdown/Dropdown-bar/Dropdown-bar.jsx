import styles from "./Dropdown-bar.module.css";
import Icon from "@/components/Icon/Icon";
import demo from "@/assets/icon_baby-products.png";
import arrow from "@/assets/arrow.png";
import Image from "next/image";
import { useFetch } from "@/lib/use-client-side-data";
import SubMenu from "../Sub-menu/Sub-menu";
import { useState } from "react";

export default function DropdownBar() {
  const categories = useFetch("item_categories");
  const [selectedSubmenu, setSelectedSubenu] = useState(null);

  return (
    <div className={styles.dropdown_bar}>
      <div className={styles.dropdown_bar_wrapper}>
        {categories?.data?.map((category, indx) => (
          <>
            <div
              className={styles.dropdown_item}
              key={indx}
              onMouseEnter={() => setSelectedSubenu(category?.cat_id)}
            >
              <Icon src={demo} />
              <h4 className={styles.dropdown_item_text}>
                {category?.cat_name_en}
              </h4>
              <Image src={arrow} alt="arrow" className={styles.dropdown_icon} />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
