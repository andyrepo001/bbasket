import styles from "./Navbar.module.css";
import Image from "next/image";
import Container from "../Container/Container";
import Hamburger from "../Hamburger/Hamburger";
import Icon from "../Icon/Icon";
import Input from "../Input/Input";
import Logo from "../Logo/Logo";
import search from "@/assets/search.png";
import shopping from "@/assets/shoppingbag.png";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles.navbar_wrapper}>
          <div className={styles.logo_wrapper}>
            <Hamburger />
            <Logo />
          </div>
          <div className={styles.search_bar}>
            <Input full />
            <Image src={search} alt="search" className={styles.search_icon} />
          </div>
          <div className={styles.cart_wrapper}>
            <div className={styles.col}>
              <div className={styles.cart}>
                <Icon src={shopping} alt="shopping bag" />
                <span className={styles.total_number}>00</span>
              </div>
              <span className={styles.total_amount}>৳ 00</span>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}
