import styles from "./Input.module.css";

export default function Input({ full, border }) {
  return (
    <input
      type="text"
      placeholder="Search for products"
      required
      className={`${styles.input} ${full ? styles.full : ""} ${
        border ? styles.border : ""
      }`}
    />
  );
}
