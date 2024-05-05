import styles from "./Brands.module.css";
import Section from "@/components/Section/Section";
import Container from "@/components/Container/Container";
import Link from "next/link";
import { getServerSideData } from "@/lib/api-calls";

export default async function Brands() {
  const brands = await getServerSideData("brand_list");
  return (
    <Container>
      <Section sectionTitle="all brands">
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
      </Section>
    </Container>
  );
}
