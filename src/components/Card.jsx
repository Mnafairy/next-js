import styles from "@/styles/components/Card.module.css";
export default function Card({ id, pName, pScore, increase, decrease }) {
  return (
    <div className={styles.card}>
      <p>{pName}</p>
      <div className={styles.stepper}>
        <button onClick={() => decrease(id)}>-</button>
        <p>{pScore}</p>
        <button onClick={() => increase(id)}>+</button>
      </div>
    </div>
  );
}
