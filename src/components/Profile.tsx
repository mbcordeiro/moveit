import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/55818513?s=460&u=20b00b19981de2d48883d8ad159db9db2ad06f4a&v=4"
        alt="Matheus Cordeiro"
      />
      <div>
        <strong>Matheus Cordeiro</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
