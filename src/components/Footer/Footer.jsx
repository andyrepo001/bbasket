import styles from "./Footer.module.css";
import Image from "next/image";
import Container from "../Container/Container";
import payment from "@/assets/payment.png";
import { api_url } from "@/static";
import Link from "next/link";

async function getData() {
  try {
    const res = await fetch(api_url + "brand_list", {
      cache: "force-cache",
      headers: {
        Authorization:
          "Bearer 7678e19c43e8b9ef56d233ebe382bb40faae5d9e5dfa062b2992232b6c54866e",
      },
    });

    const data = await res.json();

    if (data.status == "") {
      throw new Error("Failed to fetch data");
    }

    return data;
  } catch (err) {
    return null;
  }
}

export default async function Footer() {
  const brands = await getData();

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
