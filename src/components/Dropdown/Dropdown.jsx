import Image from "next/image";
import styles from "./Dropdown.module.css";
import Icon from "../Icon/Icon";

import demo from "@/assets/groceries.png";

export default function Dropdown() {
  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdown_header}>
        <Icon src={demo} alt="" />
        <h1 className={styles.dropdown_title}>
          What do you want to buy today?
        </h1>
      </div>
    </div>
  );
}
