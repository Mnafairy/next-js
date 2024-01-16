import styles from "@/styles/components/Board.module.css";
import { useState } from "react";
import Card from "@/components/Card";
const players = [
  {
    id: 1,
    pName: "Orgil",
    pScore: 0,
  },
  {
    id: 2,
    pName: "Bilguun",
    pScore: 0,
  },
  {
    id: 3,
    pName: "Enkhee",
    pScore: 0,
  },
  {
    id: 4,
    pName: "Oyuka",
    pScore: 0,
  },
];
export function Board() {
  const [scores, setScores] = useState(players);

  const increase = (id) => {
    let updateScores = scores.map((score) => {
      if (score.id == id) {
        score.pScore++;
      }
      return score;
    });
    updateScores.sort((b, a) => a.pScore - b.pScore);
    setScores(updateScores);
  };

  const decrease = (id) => {
    let updateScores = scores.map((score) => {
      if (score.id == id) {
        score.pScore--;
      }
      return score;
    });
    updateScores.sort((b, a) => a.pScore - b.pScore);
    setScores(updateScores);
  };

  const reset = () => {
    let updateScores = scores.map((score) => {
      score.pScore = 0;
      return score;
    });
    console.log("updateScores:", updateScores);
    setScores(updateScores);
  };
  return (
    <div className={styles.cardContainer}>
      {scores.map((player, index) => {
        return (
          <Card
            pName={player.pName}
            pScore={player.pScore}
            id={player.id}
            key={index}
            increase={increase}
            decrease={decrease}
          />
        );
      })}
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}
