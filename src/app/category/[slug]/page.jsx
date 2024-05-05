"use client";
import { categories } from "@/static";
import styles from "./Category.module.css";
import Container from "@/components/Container/Container";
import Section from "@/components/Section/Section";
import CategoryItem from "@/components/Category-item/Category-item";

export default function Category({ params }) {
  return (
    <Container>
      <Section sectionTitle={params?.slug.replace(/%20/g, " ")}>
        <div className={styles.category_wrapper}>
          {categories.map((category, indx) => (
            <CategoryItem item={category} key={indx} />
          ))}
        </div>
      </Section>
    </Container>
  );
}
