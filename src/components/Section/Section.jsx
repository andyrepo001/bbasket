import styles from "./Section.module.css";
import Icon from "../Icon/Icon";

export default function Section({ children, sectionIcon, sectionTitle }) {
  return (
    <section className={styles.section}>
      <div className={styles.section_header}>
        <Icon src={sectionIcon} alt={sectionTitle} />
        <h2 className={styles.section_title}>{sectionTitle}</h2>
      </div>
      <div className={styles.section_content}>{children}</div>
    </section>
  );
}
