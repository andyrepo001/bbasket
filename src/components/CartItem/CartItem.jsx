import styles from "./CartItem.module.css";
import Button from "../Button/Button";

export default function CartItem({ item }) {
  return (
    <div className={styles.cart_item}>
      <div className={styles.cart_item_info}>
        <h4 className={`${styles.col} ${styles.cart_item_title}`}>
          {item?.item_name_en}
        </h4>
        <p className={styles.col}>
          {item?.quantity} x {item?.item_price}৳
        </p>
        <p className={styles.col}>{item?.quantity * item?.item_price}৳</p>
      </div>
      <div className={styles.cart_item_manage}>
        <Button label="update" primary />
        <Button label="remove" destroy />
      </div>
    </div>
  );
}
