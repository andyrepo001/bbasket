import styles from "./page.module.css";
import Container from "@/components/Container/Container";
import ProductCard from "@/components/ProductCard/ProductCard";
import Section from "@/components/Section/Section";
import Slider from "@/components/Slider/Slider";
import popular_icon from "@/assets/title_popular.png";
import offer_icon from "@/assets/title_offers.png";
import CategoryItem from "@/components/Category-item/Category-item";
import { getServerSideData } from "@/lib/api-calls";

export default async function Home() {
  const products = await getServerSideData("popular_items");
  const categories = await getServerSideData("item_categories");

  return (
    <main>
      <Container>
        {/* Slider */}
        <Section>
          <Slider />
        </Section>
        {/* <!-- Categories --> */}
        <Section>
          <div className={styles.categories}>
            {categories?.data.map((category, indx) => (
              <CategoryItem item={category} key={indx} />
            ))}
          </div>
        </Section>
        <Section
          sectionTitle="popular products our customers loved"
          sectionIcon={popular_icon}
        >
          <div className={styles.popular_products}>
            {products?.data ? (
              Object.keys(products?.data).map((product, indx) => (
                <ProductCard item={products?.data[product]} key={indx} />
              ))
            ) : (
              <h1>Unable to fetch data</h1>
            )}
          </div>
        </Section>
        <Section sectionTitle="offers" sectionIcon={offer_icon}>
          <div className={styles.popular_products}>
            {products?.data ? (
              Object.keys(products?.data).map((product, indx) => (
                <ProductCard item={products?.data[product]} key={indx} />
              ))
            ) : (
              <h1>Unable to fetch data</h1>
            )}
          </div>
        </Section>
      </Container>
    </main>
  );
}
