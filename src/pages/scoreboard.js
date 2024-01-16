import { Board, TextContainer } from "@/components";
// import { Board } from "@/components/Board";
// import { TextContainer } from "@/components/TextContainer";
import styles from "@/styles/pages/Scoreboard.module.css";
function Scoreboard() {
  return (
    <div className={styles.container}>
      <TextContainer />
      <Board />
    </div>
  );
}
export default Scoreboard;
