import Input from "../Input/Input";
import styles from "./Select.module.css";

export default function Select({ required }) {
  return (
    <div className={styles.select_wrapper}>
      <label htmlFor="myBrowser">
        Select delivery time...
        {required && <span className={styles.ast}>*</span>}
      </label>

      <Input
        placeholder="Select info"
        border
        dataList={"data"}
        required={required}
      />
      <datalist id="data">
        <option value="Option 1">Option 1</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 1">Option 1</option>
      </datalist>
    </div>
  );
}
