import React from 'react';
import './Rules.scss';

function Rules() {
  return (
    <div className="rules">
      <h1>Game Rules</h1>
      <div className="rules__content">
        <h2>How to Play</h2>
        <ul>
          <li>Lose a piece? Do exercises to gain points back!</li>
          <li>Each chess piece has a point value when lost:</li>
          <ul>
            <li>Pawn: -1 point</li>
            <li>Knight/Bishop: -3 points</li>
            <li>Rook/King: -5 points</li>
            <li>Queen: -9 points</li>
          </ul>
          <li>Exercise points:</li>
          <ul>
            <li>Push-ups: +4 points</li>
            <li>Squats: +2 points</li>
            <li>Jumping Jacks: +0.5 points</li>
          </ul>
        </ul>
      </div>
    </div>
  );
}

export default Rules;
