import React from 'react';
import { BoardComponentPropsType, SquareComponentPropsType } from './type';

/**
 * Board component of the game
 * @param {BoardComponentPropsType} props Props state. See {@link BoardComponentPropsType}
 * @returns {JSX.Element}
 */
export const Board = ({ boardState, onSquareClicked, width, height, winningMoves }: BoardComponentPropsType) => {
  const checkSquareWinner = (idx: number): boolean => {
    if (!winningMoves) return false;
    if (winningMoves.includes(idx)) return true;
    return false;
  };

  /**
   * Square component
   * @param squareProps See {@link SquareComponentPropsType}
   * @returns {JSX.Element}
   */
  const Square = ({ row, col }: SquareComponentPropsType): JSX.Element => (
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
