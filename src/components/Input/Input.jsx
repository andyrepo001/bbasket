import styles from "./Input.module.css";

export default function Input({
  full,
  center,
  border,
  placeholder,
  focus,
  handleChange,
  name,
  type,
  required,
}) {
  return (
    <input
      name={name}
      onChange={handleChange}
      type={type}
      placeholder={placeholder}
      required={required}
      className={`${styles.input} ${full ? styles.full : ""} ${
        border ? styles.border : ""
      } ${center ? styles.center : ""}`}
      autoFocus={focus}
    />
  );
}
