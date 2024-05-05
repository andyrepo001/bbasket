import styles from "./Panel.module.css";
import Container from "@/components/Container/Container";
import Dropdown from "@/components/Dropdown/Dropdown";
import Link from "next/link";

export default function Panel() {
  return (
    <div className={styles.panel}>
      <Container>
        <div className={styles.panel_wrapper}>
          <div className={styles.dropdown_wrapper}>
            <Dropdown />
          </div>
          <div className={styles.panel_links}>
            <Link href="/offers">Offers</Link>
            <Link href="/brands">Featured Brands</Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
