import styles from "@/styles/components/Board.module.css";
import { useState } from "react";
import Card from "@/components/Card";
import AddScreen from "@/components/AddScreen";
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
  let [clicked, setClick] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
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
  const showAddPlayer = () => {
    console.log(clicked);
    clicked = !clicked;
    setClick(clicked);
  };
  const handleChange = (event, type) => {
    type == "name"
      ? setPlayerName(event.target.value)
      : type == "score"
      ? setPlayerScore(event.target.value)
      : null;
  };
  const addPlayer = () => {
    let nameValid = false;
    let scoreValid = false;
    let newPlayer = {
      id: scores.length,
      pName: playerName,
      pScore: playerScore,
    };
    console.log(typeof playerScore);
    isNaN(newPlayer.pScore)
      ? alert("Please enter a valid score")
      : (scoreValid = true);
    playerName.includes("John")
      ? (nameValid = true)
      : alert("Please enter a name that includes John");
    if (nameValid && scoreValid) {
      scores.push(newPlayer);
      scores.sort((b, a) => a.pScore - b.pScore);
      setScores([...scores]);
    }
    console.log(scores);
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
      <AddScreen
        bool={clicked}
        addFunc={addPlayer}
        setPlayerName={handleChange}
      />
      <button onClick={() => showAddPlayer()}>Add player</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}
