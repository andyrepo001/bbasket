"use client";
import styles from "./Cart.module.css";
import Button from "../Button/Button";
import CartItem from "./CartItem/CartItem";
import Icon from "../Icon/Icon";
import groceries from "@/assets/groceries.png";
import close from "@/assets/close.png";
import { useCartStore } from "@/hooks/use-cart.js";
import { useCartSidebar } from "@/hooks/use-cart-sidebar";
import Modal from "../Modals/Modal";
import LoginModal from "../Modals/Login-modal/Login-modal";
import { useLoginModal } from "@/hooks/use-login-modal";
import login from "@/assets/login_color.png";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CartTotal from "./Cart-total/Cart-total";

export default function Cart() {
  const [user, setuser] = useState(null);
  const cartSidebar = useCartSidebar();
  const cart = useCartStore();
  const modal = useLoginModal();
  const router = useRouter();
  useEffect(() => {
    setuser(getCookie("bcli"));
  }, []);

  return (
    <div
      className={`${styles.cart} ${cartSidebar.isOpen ? styles.visible : ""}`}
    >
      {!user && (
        <Modal
          content={<LoginModal />}
          header={"login or sign up"}
          icon={login}
          isOpen={modal.isOpen}
          onClose={modal.onClose}
        />
      )}
      <div className={styles.cart_wrapper}>
        {/* <!-- Cart header --> */}
        <div className={styles.cart_top}>
          <div className={styles.cart_indicator}>
            <Icon src={groceries} />
            <span>my basket items</span>
          </div>
          <Icon src={close} handleAction={cartSidebar.onClose} />
        </div>
        {/* <!-- Cart items --> */}
        <div className={styles.cart_content}>
          {cart?.cartItems.map((item, indx) => (
            <CartItem key={indx} item={item} />
          ))}
        </div>

        <div className={styles.cart_bottom}>
          <CartTotal />
          {!user ? (
            <Button
              label="register / login"
              full
              handleAction={modal.onOpen}
              primary
            />
          ) : (
            <Button
              label="proceed to checkout"
              full
              primary
              handleAction={() => router.push("/checkout")}
            />
          )}
        </div>
      </div>
    </div>
  );
}
