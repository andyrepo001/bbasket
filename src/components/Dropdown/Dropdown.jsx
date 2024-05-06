"use client";
import styles from "./Dropdown.module.css";
import Icon from "../Icon/Icon";
import demo from "@/assets/groceries.png";
import DropdownBar from "./Dropdown-bar/Dropdown-bar";
import { useDropdown } from "@/hooks/use-dropdown";

export default function Dropdown() {
  const dropdown = useDropdown();

  return (
    <div
      className={styles.dropdown}
      onClick={dropdown.isOpen ? dropdown.onClose : dropdown.onOpen}
    >
      <div className={styles.dropdown_header}>
        <Icon src={demo} alt="" />
        <h1 className={styles.dropdown_title}>
          What do you want to buy today?
        </h1>
      </div>
      {dropdown.isOpen && <DropdownBar />}
    </div>
  );
}
