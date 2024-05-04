import styles from "./CartItem.module.css";
import Button from "../Button/Button";

export default function CartItem({ item }) {
  return (
    <li className={styles.list_item}>
      <h4>
        {item?.title} - {item?.quantity} x ৳{item?.price?.toFixed(2)}
      </h4>
      <Button label="remove" full />
    </li>
  );
}
