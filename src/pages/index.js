import styles from "@/styles/pages/Home.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.container}>
      <Link href={"/scoreboard"}>Move to scoreboard</Link>
    </div>
  );
}
