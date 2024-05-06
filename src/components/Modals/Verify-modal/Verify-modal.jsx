import Input from "@/components/Input/Input";
import styles from "./Verify-modal.module.css";

export default function VerifyModal() {
  return (
    <div className={styles.verify_modal}>
      <div className={styles.verify_wrapper}>
        <Input border center focus />
        <Input border center />
        <Input border center />
        <Input border center />
      </div>
    </div>
  );
}
