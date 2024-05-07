import styles from "./Dropdown-content.module.css";

export default function DropdownContent({ category }) {
  console.log(category);
  return (
    <div className={styles.dropdown_content}>
      <h1>{category.cat_image}</h1>
    </div>
  );
}
