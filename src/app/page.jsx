import styles from "./page.module.css";
import { categories, products } from "@/static";
import Container from "@/components/Container/Container";
import ProductCard from "@/components/ProductCard/ProductCard";
import Section from "@/components/Section/Section";
import Slider from "@/components/Slider/Slider";
import popular_icon from "@/assets/title_popular.png";
import offer_icon from "@/assets/title_offers.png";
import CategoryItem from "@/components/Category-item/Category-item";

export default function Home() {
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
            {categories.map((category, indx) => (
              <CategoryItem item={category} key={indx} />
            ))}
          </div>
        </Section>
        <Section
          sectionTitle="popular products our customers loved"
          sectionIcon={popular_icon}
        >
          <div className={styles.popular_products}>
            {products.map((product, indx) => (
              <ProductCard item={product} key={indx} />
            ))}
          </div>
        </Section>
        <Section sectionTitle="offers" sectionIcon={offer_icon}>
          <div className={styles.popular_products}>
            {products.map((product, indx) => (
              <ProductCard item={product} key={indx} />
            ))}
          </div>
        </Section>
      </Container>
    </main>
  );
}
