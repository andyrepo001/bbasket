import styles from "./Button.module.css";
import Image from "next/image";

export default function Button({ icon, label, full, handleAction }) {
  return (
    <button
      onClick={handleAction}
      className={`${styles.button} ${styles.primary} ${
        full ? styles.full : ""
      }`}
    >
      {icon && <Image src={icon} alt={label} className={styles.button_icon} />}
      <span>{label}</span>
    </button>
  );
}
