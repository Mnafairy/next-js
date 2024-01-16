import styles from "@/styles/pages/Home.module.css";
import Link from "next/link";
// import Scoreboard from "./scoreboard";
export default function Home() {
  return (
    <div className={styles.container}>
      <Link href={"/scoreboard"}>Move to scoreboard</Link>
      {/* <Scoreboard /> */}
    </div>
  );
}
