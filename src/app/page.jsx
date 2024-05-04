import styles from "./page.module.css";
import { categories, products } from "@/static";
import Category from "@/components/Category/Category";
import Container from "@/components/Container/Container";
import ProductCard from "@/components/ProductCard/ProductCard";
import Section from "@/components/Section/Section";
import Slider from "@/components/Slider/Slider";

import popular_icon from "@/assets/title_popular.png";
import offer_icon from "@/assets/title_offers.png";

export default function Home() {
  return (
    <main>
      <Container>
        {/* Slider */}
        <Slider />
        {/* <!-- Categories --> */}
        <div className={styles.categories}>
          {categories.map((category, indx) => (
            <Category item={category} key={indx} />
          ))}
        </div>
        <Section
          sectionTitle="popular products our customers loved"
          sectionIcon={popular_icon}
        >
          <div class={styles.popular_products}>
            {products.map((product, indx) => (
              <ProductCard item={product} key={indx} />
            ))}
          </div>
        </Section>
        <Section sectionTitle="offers" sectionIcon={offer_icon}>
          <div class={styles.popular_products}>
            {products.map((product, indx) => (
              <ProductCard item={product} key={indx} />
            ))}
          </div>
        </Section>
      </Container>
    </main>
  );
}
