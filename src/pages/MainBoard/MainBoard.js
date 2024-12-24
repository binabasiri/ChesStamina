import React from 'react';
import './MainBoard.scss';
import { useState } from 'react';
import ButtonCards from '../../components/ButtonCard/ButtonCard';
import blackRookIcon from '../../assets/chess pieces/brook.png';
import whiteRookIcon from '../../assets/chess pieces/wrook.png';
import whiteBishopIcon from '../../assets/chess pieces/wbishop.png';
import blackBishopIcon from '../../assets/chess pieces/bbishop.png';
import blackPawnIcon from '../../assets/chess pieces/bpawn.png';
import whitePawnIcon from '../../assets/chess pieces/wpawn.png';
import blackKingIcon from '../../assets/chess pieces/bking.png';
import whiteKingIcon from '../../assets/chess pieces/wking.png';
import blackQueenIcon from '../../assets/chess pieces/bqueen.png';
import whiteQueenIcon from '../../assets/chess pieces/wqueen.png';
import whiteKnightIcon from '../../assets/chess pieces/wknight.png';
import blackKnightIcon from '../../assets/chess pieces/bknight.png';
import pushUpIcon from '../../assets/exercises/pushup.png';
import jumpingJackIcon from '../../assets/exercises/jumpingjack.png';
import squatIcon from '../../assets/exercises/squat.png';
import blackPushUpIcon from '../../assets/exercises/blackpushup.png';
import blackJumpingJackIcon from '../../assets/exercises/blackjumpingjack.png';
import blackSquatIcon from '../../assets/exercises/blacksquat.png';
import undoIcon from '../../assets/undo.png';
import ScoreBoard from '../../components/ScoreBoard/ScoreBoard';

function MainBoard() {
  const [whiteScore, setWhiteScore] = useState(0);
  const [blackScore, setBlackScore] = useState(0);
  const [whiteHistory, setWhiteHistory] = useState([]);
  const [blackHistory, setBlackHistory] = useState([]);

  const changeBlackPoint = (point) => {
    const newScore = blackScore + point;
    const newBlackHistory = blackHistory;
    if (newScore >= 0) {
      setBlackScore(newScore);
      newBlackHistory.push(point);
      setBlackHistory(newBlackHistory);
    }
  };
  const changeWhitePoint = (point) => {
    const newScore = whiteScore + point;
    const newWhiteHistory = whiteHistory;
    if (newScore >= 0) {
      setWhiteScore(newScore);
      newWhiteHistory.push(point);
      setWhiteHistory(newWhiteHistory);
    }
  };
  const resetHandler = () => {
    setWhiteScore(0);
    setBlackScore(0);
    setWhiteHistory([]);
    setBlackHistory([]);
  };
  const whiteUndoHandler = () => {
    if (whiteHistory.length) {
      const whiteHistoryCopy = [...whiteHistory];
      const lastMove = whiteHistoryCopy.pop();
      const newWhiteScore = whiteScore - lastMove;
      setWhiteScore(newWhiteScore);
      setWhiteHistory(whiteHistoryCopy);
    }
  };
  const blackUndoHandler = () => {
    if (blackHistory.length) {
      const blackHistoryCopy = [...blackHistory];
      const lastMove = blackHistoryCopy.pop();
      const newBlackScore = blackScore - lastMove;
      setBlackScore(newBlackScore);
      setBlackHistory(blackHistoryCopy);
    }
  };

  return (
    <div className="board">
      <div className="pieces-board">
        <ButtonCards
          clickHandler={changeBlackPoint}
          point={-1}
          icon={blackPawnIcon}
          id={'blackPawn'}
        />
        <ButtonCards
          clickHandler={changeBlackPoint}
          point={-3}
          icon={blackKnightIcon}
          id={'blackKnight'}
        />
        <ButtonCards
          clickHandler={changeBlackPoint}
          point={-3}
          icon={blackBishopIcon}
          id={'blackBishop'}
        />
      </div>
      <div className="pieces-board">
        <ButtonCards
          clickHandler={changeBlackPoint}
          point={-5}
          icon={blackRookIcon}
          id={'blackRook'}
        />
        <ButtonCards
          clickHandler={changeBlackPoint}
          point={-9}
          icon={blackQueenIcon}
          id={'blackQueen'}
        />
        <ButtonCards
          clickHandler={changeBlackPoint}
          point={-5}
          icon={blackKingIcon}
          id={'blackKing'}
        />
      </div>
      <div className="exercises">
        <ButtonCards
          clickHandler={changeBlackPoint}
          point={4}
          icon={blackPushUpIcon}
          id={'blackPushUp'}
        />
        <ButtonCards
          clickHandler={changeBlackPoint}
          point={0.5}
          icon={blackJumpingJackIcon}
          id={'blackJumpingJack'}
        />
        <ButtonCards
          clickHandler={changeBlackPoint}
          point={2}
          icon={blackSquatIcon}
          id={'blackSquat'}
        />
      </div>
      <ScoreBoard
        resetHandler={resetHandler}
        whiteUndoHandler={whiteUndoHandler}
        blackUndoHandler={blackUndoHandler}
        whiteScore={whiteScore}
        blackScore={blackScore}
        undoIcon={undoIcon}
      />
      <div className="exercises">
        <ButtonCards
          clickHandler={changeWhitePoint}
          point={4}
          icon={pushUpIcon}
          id={'pushUp'}
        />
        <ButtonCards
          clickHandler={changeWhitePoint}
          point={0.5}
          icon={jumpingJackIcon}
          id={'jumpingJack'}
        />
        <ButtonCards
          clickHandler={changeWhitePoint}
          point={2}
          icon={squatIcon}
          id={'squat'}
        />
      </div>
      <div className="pieces-board">
        <ButtonCards
          clickHandler={changeWhitePoint}
          point={-1}
          icon={whitePawnIcon}
          id={'whitePawn'}
        />
        <ButtonCards
          clickHandler={changeWhitePoint}
          point={-3}
          icon={whiteKnightIcon}
          id={'whiteKnight'}
        />
        <ButtonCards
          clickHandler={changeWhitePoint}
          point={-3}
          icon={whiteBishopIcon}
          id={'whiteBishop'}
        />
      </div>
      <div className="pieces-board">
        <ButtonCards
          clickHandler={changeWhitePoint}
          point={-5}
          icon={whiteRookIcon}
          id={'whiteRook'}
        />
        <ButtonCards
          clickHandler={changeWhitePoint}
          point={-9}
          icon={whiteQueenIcon}
          id={'whiteQueen'}
        />
        <ButtonCards
          clickHandler={changeWhitePoint}
          point={-5}
          icon={whiteKingIcon}
          id={'whiteKing'}
        />
      </div>
    </div>
  );
}

export default MainBoard;
