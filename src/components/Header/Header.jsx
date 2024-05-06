import Icon from "../Icon/Icon";
import styles from "./Header.module.css";

export default function Header({ header, icon }) {
  return (
    <div className={styles.header_wrapper}>
      {icon && <Icon src={icon} alt={header} />}
      <h2 className={styles.header}>{header}</h2>
    </div>
  );
}
