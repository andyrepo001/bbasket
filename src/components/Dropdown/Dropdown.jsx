"use client";
import styles from "./Dropdown.module.css";
import { useFetch } from "@/lib/use-client-side-data";
import { useState } from "react";
import { useDropdown } from "@/hooks/use-dropdown";
import Icon from "../Icon/Icon";
import demo from "@/assets/groceries.png";
import arrow from "@/assets/arrow.png";
import Image from "next/image";

export default function Dropdown() {
  const categories = useFetch("item_categories");
  const dropdown = useDropdown();
  const [hoveredSubmenu, setHoveredSubmenu] = useState(null);

  const RenderSubmenu = ({ submenu }) => {
    return (
      <>
        {submenu?.child && (
          <div
            className={`${
              hoveredSubmenu === submenu?.cat_id
                ? styles.submenu
                : styles.hidden
            }`}
          >
            {submenu?.child?.map((item) => (
              <span key={item.cat_id}>{item.cat_name_en}</span>
            ))}
          </div>
        )}
      </>
    );
  };

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
      {dropdown.isOpen && (
        <div className={styles.dropdown_bar}>
          <div className={styles.dropdown_bar_wrapper}>
            {categories?.data?.map((category, indx) => (
              <div
                className={styles.dropdown_item}
                key={indx}
                onMouseEnter={() => setHoveredSubmenu(category?.cat_id)}
                onMouseLeave={() => setHoveredSubmenu(null)}
              >
                <Icon src={demo} />
                <h4 className={styles.dropdown_item_text}>
                  {category?.cat_name_en}
                </h4>
                <Image
                  src={arrow}
                  alt="arrow"
                  className={styles.dropdown_icon}
                />

                <RenderSubmenu submenu={category} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
