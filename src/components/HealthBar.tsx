import heart from "../assets/images/icon-heart.svg";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const HealthBar = () => {
  const state = useSelector((state: RootState) => state.game);
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
