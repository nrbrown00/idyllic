"use client;"
import Image from "next/image";
import styles from "./page.module.css";
import IdylicTracker from "./IdylicTracker/IdylicTracker";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <IdylicTracker />
      </main>
    </div>
  );
}
