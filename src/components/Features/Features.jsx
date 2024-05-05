import styles from "./Features.module.css";
import FeatureItem from "./Feature-item/Feature-item";
import Container from "../Container/Container";
import Section from "../Section/Section";

export default function Features() {
  return (
    <Section>
      <div className={styles.features_wrapper}>
        <Container>
          <div className={styles.features}>
            <FeatureItem />
            <FeatureItem />
            <FeatureItem />
            <FeatureItem />
          </div>
        </Container>
      </div>
    </Section>
  );
}
