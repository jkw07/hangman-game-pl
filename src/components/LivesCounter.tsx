type LivesCounterProps = {
    maxLives: number,
    livesLeft: number,
}

export const LivesCounter = ({maxLives, livesLeft}: LivesCounterProps) => {
    return (
    <>
      <i className="fa-solid fa-heart fa-2xl heart" style={{ color: "#db1488" }}></i>

      <span className="me-2">{livesLeft}: </span>
        <div className="progress flex-grow-1">
            <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: `${Math.max((livesLeft / maxLives) * 100, 1)}%`}} aria-valuenow={livesLeft} 
        aria-valuemin={0} 
        aria-valuemax={maxLives} ></div>
        </div>
    </>
  );
};