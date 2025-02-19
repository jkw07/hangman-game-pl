import heart from "../assets/images/icon-heart.svg";
import { useGameContext } from "./GameContext";

export const HealthBar = () => {
  const { state } = useGameContext();
  return (
    <div className="health-bar">
      <div className="progress">
        <span>{state.livesLeft}</span>
        <div
          className="progress-bar"
          style={{ width: `${state.livesLeft / 0.08}%` }}
        >
          <span>{state.livesLeft}</span>
        </div>
      </div>
      <img className="heart-icon" alt="heart icon" src={heart}></img>
    </div>
  );
};
