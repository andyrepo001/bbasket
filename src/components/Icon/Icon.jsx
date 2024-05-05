import styles from "./Icon.module.css";
import Image from "next/image";

export default function Icon({ src, alt, handleAction }) {
  return (
    <Image src={src} alt={alt} className={styles.icon} onClick={handleAction} />
  );
}
