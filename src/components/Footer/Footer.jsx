import styles from "./Footer.module.css";
import Image from "next/image";
import Container from "../Container/Container";
import payment from "@/assets/payment.png";
import Link from "next/link";
import { getServerSideData } from "@/lib/api-calls";

export default async function Footer() {
  const brands = await getServerSideData("brand_list");

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer_header}>
          <p>Got questions? Call us!</p>
          <a href="tel:+8801844-482222">
            <h2>(88) 01844-482222</h2>
          </a>
        </div>
        <div className={styles.brands}>
          <h4 className={styles.brands_title}>Brands</h4>
          <div className={styles.brands_links}>
            {brands?.data ? (
              brands?.data.map((brand, indx) => (
                <Link href="" className={styles.brand_name} key={indx}>
                  {brand.ib_name_en}
                </Link>
              ))
            ) : (
              <h1>Unable to fetch data</h1>
            )}
          </div>
        </div>
        <div className={styles.copyright}>
          <span>
            &copy; <h4>borobasket limited</h4>- all rights reserved
          </span>
          <Image
            src={payment}
            alt="payment methods"
            className={styles.payment_image}
          />
        </div>
      </Container>
    </footer>
  );
}
