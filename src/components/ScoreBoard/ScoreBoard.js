import React from 'react';
import './ScoreBoard.scss';
function ScoreBoard({
  whiteScore,
  blackScore,
  resetHandler,
  whiteUndoHandler,
  blackUndoHandler,
  undoIcon,
}) {
  return (
    <div className="score-board">
      <div onClick={blackUndoHandler} className="score-board__undo">
        <img
          className="score-board__undo-image score-board__undo-image--black"
          onClick={blackUndoHandler}
          src={undoIcon}
          alt="black undo"
        />
      </div>
      <div className="score-board__card score-board__card--black">
        <span className="score-board__score score-board__score--black">
          {blackScore}
        </span>
      </div>
      <div className="score-board__reset" onClick={resetHandler}>
        Reset
      </div>
      <div className=" score-board__card score-board__card--white">
        <span className="score-board__score score-board__score--white">
          {whiteScore}
        </span>
      </div>
      <div onClick={whiteUndoHandler} className="score-board__undo">
        <img
          className="score-board__undo-image"
          src={undoIcon}
          alt="white undo"
        />
      </div>
    </div>
  );
}

export default ScoreBoard;
