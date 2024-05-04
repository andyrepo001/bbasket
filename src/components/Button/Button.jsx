import styles from "./Button.module.css";
import Image from "next/image";

export default function Button({ icon, label, full }) {
  return (
    <button
      className={`${styles.button} ${styles.primary} ${
        full ? styles.full : ""
      }`}
    >
      {icon && <Image src={icon} alt="" className={styles.button_icon} />}
      <span>{label}</span>
    </button>
  );
}
