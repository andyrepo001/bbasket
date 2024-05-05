import styles from "./Features.module.css";
import FeatureItem from "./Feature-item/Feature-item";
import Container from "../Container/Container";
import { features } from "@/lib/static";

export default function Features() {
  return (
    <div className={styles.features_wrapper}>
      <Container>
        <div className={styles.features}>
          {features.map((feature, indx) => (
            <FeatureItem feature={feature} key={indx} />
          ))}
        </div>
      </Container>
    </div>
  );
}
