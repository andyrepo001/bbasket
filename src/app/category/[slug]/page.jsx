import styles from "./Category.module.css";
import Container from "@/components/Container/Container";
import Section from "@/components/Section/Section";
import CategoryItem from "@/components/Category-item/Category-item";
import { getServerSideData } from "@/lib/api-calls";

export default async function Category({ params }) {
  const categories = await getServerSideData("item_categories");

  return (
    <Container>
      <Section sectionTitle={params?.slug.replace(/%20/g, " ")}>
        <div className={styles.category_wrapper}>
          {categories?.data?.map((category, indx) => (
            <CategoryItem item={category} key={indx} />
          ))}
        </div>
      </Section>
    </Container>
  );
}
