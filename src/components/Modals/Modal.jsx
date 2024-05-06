"use client";
import { useState } from "react";
import Header from "../Header/Header";
import styles from "./Modal.module.css";

export default function Modal({ content, header, icon, isOpen, onClose }) {
  if (!isOpen) return;

  return (
    <>
      <div className={styles.modal} onClick={onClose}></div>
      <div className={styles.modal_content}>
        <div className={styles.modal_header}>
          <Header header={header} icon={icon} />
        </div>
        <div className={styles.content_wrapper}>{content}</div>
      </div>
    </>
  );
}
