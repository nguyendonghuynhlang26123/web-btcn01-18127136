export type SquareType = 'X' | 'O' | null;
export type BoardComponentPropsType = {
  boardState: SquareType[];
  winningMoves: number[] | null;
  width: number;
  height: number;
  onSquareClicked: (i: number) => void;
};
export type SquareComponentPropsType = { row: number; col: number };
