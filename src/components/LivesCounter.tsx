type LivesCounterProps = {
    livesLeft: number,
}

export const LivesCounter = ({livesLeft}: LivesCounterProps) => {
    return (
    <>
      {[...new Array(livesLeft)].map((_, index) => (
  <i key={index} className="fa-solid fa-heart fa-xl heart" style={{ color: "#db1488" }}></i>
))}
    </>
  );
};