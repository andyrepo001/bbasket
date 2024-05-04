import styles from "./Hamburger.module.css";

export default function Hamburger() {
  return (
    <div className={styles.hamburger}>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </div>
  );
}
