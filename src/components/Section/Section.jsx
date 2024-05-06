import styles from "./Section.module.css";
import Icon from "../Icon/Icon";
import Header from "../Header/Header";

export default function Section({ children, sectionIcon, sectionTitle }) {
  return (
    <section className={styles.section}>
      {/* {sectionTitle && (
        <div className={styles.section_header}>
          {sectionIcon && <Icon src={sectionIcon} alt={sectionTitle} />}
          <h2 className={styles.section_title}>{sectionTitle}</h2>
        </div>
      )} */}
      <Header header={sectionTitle} icon={sectionIcon} />
      <div className={styles.section_content}>{children}</div>
    </section>
  );
}
