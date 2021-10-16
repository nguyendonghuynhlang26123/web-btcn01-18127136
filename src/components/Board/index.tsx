import React from 'react';
import { BoardPropsType } from './type';

export const Board = ({ boardState, onSquareClicked, width, height, winningMoves }: BoardPropsType) => {
  const checkSquareWinner = (idx: number): boolean => {
    if (!winningMoves) return false;
    if (winningMoves.includes(idx)) return true;
    return false;
  };

  const Square = ({ row, col }: { row: number; col: number }): JSX.Element => (
    <button
      className={`square ${checkSquareWinner(row * width + col) && 'win'} ${boardState[row * width + col]}`}
      onClick={() => {
        if (onSquareClicked) onSquareClicked(row * width + col);
      }}
    >
      {boardState[row * width + col]}
    </button>
  );

  return (
    <div>
      {Array(height)
        .fill(null)
        .map((temp2, row) => (
          <div key={row} className="board-row">
            {Array(width)
              .fill(null)
              .map((tmp1, col) => (
                <Square row={row} col={col} />
              ))}
          </div>
        ))}
    </div>
  );
};
