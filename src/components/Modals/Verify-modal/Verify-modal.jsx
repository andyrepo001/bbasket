import Input from "@/components/Input/Input";
import styles from "./Verify-modal.module.css";

export default function VerifyModal({ handleChange }) {
  return (
    <div className={styles.verify_modal}>
      <div className={styles.verify_wrapper}>
        <Input border center sm focus handleChange={handleChange} />
        <Input border center sm handleChange={handleChange} />
        <Input border center sm handleChange={handleChange} />
        <Input border center sm handleChange={handleChange} />
      </div>
    </div>
  );
}
