import styles from "./Input.module.css";

export default function Input({
  full,
  sm,
  center,
  border,
  placeholder,
  label,
  dataList,
  focus,
  handleChange,
  name,
  type,
  required,
}) {
  return (
    <div className={styles.input_wrapper}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.ast}> *</span>}
        </label>
      )}
      <input
        name={name}
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
        required={required}
        list={dataList}
        className={`${styles.input} ${full ? styles.full : ""} ${
          border ? styles.border : ""
        } ${center ? styles.center : ""} ${sm ? styles.sm : ""}`}
        autoFocus={focus}
      />
    </div>
  );
}
