export type SquareType = 'X' | 'O' | null;
export type BoardPropsType = {
  boardState: SquareType[];
  winningMoves: number[] | null;
  width: number;
  height: number;
  onSquareClicked: (i: number) => void;
};
