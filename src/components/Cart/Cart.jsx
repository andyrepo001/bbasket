import styles from "./Cart.module.css";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import Icon from "../Icon/Icon";
import groceries from "@/assets/groceries.png";
import close from "@/assets/close.png";

export default function Cart() {
  return (
    <div className={styles.cart}>
      <div className={styles.cart_wrapper}>
        {/* <!-- Cart header --> */}
        <div className={styles.cart_top}>
          <div className={styles.cart_indicator}>
            <Icon src={groceries} />
            <span>my basket items</span>
          </div>
          <Icon src={close} />
        </div>
        {/* <!-- Cart items --> */}
        <div className={styles.cart_content}>
          <CartItem />
        </div>

        {/* <!-- Cart total --> */}
        <div className={styles.cart_bottom}>
          <div className={styles.bottom_content}>
            <div className={styles.cart_total}>
              <p>sub total</p>
              <p>৳ 00</p>
            </div>
            <div className={styles.cart_total}>
              <p>delivery charge</p>
              <p>৳ 00</p>
            </div>
            <div className={styles.cart_total}>
              <h6>grand total</h6>
              <p>৳ 00</p>
            </div>
            <Button label="register / login" full />
          </div>
        </div>
      </div>
    </div>
  );
}
