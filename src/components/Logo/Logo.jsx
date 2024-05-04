import styles from "./Logo.module.css";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image src={logo} alt="logo" className={styles.logo} />
    </Link>
  );
}
