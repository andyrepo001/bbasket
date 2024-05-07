import styles from "./Button.module.css";
import Image from "next/image";

export default function Button({
  icon,
  label,
  full,
  handleAction,
  destroy,
  primary,
}) {
  return (
    <button
      onClick={handleAction}
      className={`${styles.button} ${primary ? styles.primary : ""} ${
        full ? styles.full : ""
      } ${destroy ? styles.destroy : ""}`}
    >
      {icon && <Image src={icon} alt={label} className={styles.button_icon} />}
      <span>{label}</span>
    </button>
  );
}
