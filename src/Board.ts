import { Column, ColumnIdx } from './Column'
import { IsRowSpaceTaken, Row, RowIdx, RowPlaceMark } from './Row'
import { O, Space, X, _ } from './Space'
import { Equals } from './Utils'

// ----------------------------------------------------------------- //
// Data
// ----------------------------------------------------------------- //
export type Board<
  _00 extends Space, _01 extends Space, _02 extends Space,
  _10 extends Space, _11 extends Space, _12 extends Space,
  _20 extends Space, _21 extends Space, _22 extends Space
> =
  { 0: Row<_00, _01, _02>
  , 1: Row<_10, _11, _12>
  , 2: Row<_20, _21, _22>
  }

export type AnyBoard = Board<any, any, any, any, any, any, any, any, any>
export type NewBoard = Board<_, _, _, _, _, _, _, _, _>

// ----------------------------------------------------------------- //
// Behaviors
// ----------------------------------------------------------------- //
export type BoardColumn<J extends 0 | 1 | 2, B extends AnyBoard> =
  Column<B[0][J], B[1][J], B[2][J]>

export type PlaceMark<
  M extends X | O,
  I extends 0 | 1 | 2,
  J extends 0 | 1 | 2,
  B extends AnyBoard
> =
  { 0: I extends 0
       ? RowPlaceMark<M, J, B[0]>
       : B[0]
  , 1: I extends 1
       ? RowPlaceMark<M, J, B[1]>
       : B[1]
  , 2: I extends 2
       ? RowPlaceMark<M, J, B[2]>
       : B[2]
  }

export type IsBoardSpaceTaken<
  I extends RowIdx,
  J extends ColumnIdx,
  B extends AnyBoard
> =
  B extends Board<
    infer _00, infer _01, infer _02,
    infer _10, infer _11, infer _12,
    infer _20, infer _21, infer _22
  >
    ? I extends 0 ? IsRowSpaceTaken<J, Row<_00, _01, _02>>
    : I extends 1 ? IsRowSpaceTaken<J, Row<_10, _11, _12>>
    : I extends 2 ? IsRowSpaceTaken<J, Row<_20, _21, _22>>
    : never
  : never

export type BoardUnfilledRowIndices<B extends AnyBoard> =
  B extends Board<
    infer _00 extends Space, infer _01 extends Space, infer _02 extends Space,
    infer _10 extends Space, infer _11 extends Space, infer _12 extends Space,
    infer _20 extends Space, infer _21 extends Space, infer _22 extends Space
  >
    ? | (Equals<Extract<_00 | _01 | _02, _>, _> extends true ? 0 : never)
      | (Equals<Extract<_10 | _11 | _12, _>, _> extends true ? 1 : never)
      | (Equals<Extract<_20 | _21 | _22, _>, _> extends true ? 2 : never)
    : never

// ----------------------------------------------------------------- //
// Testing
// ----------------------------------------------------------------- //
type BoardFixture = Board<
    X, X, X,
    O, O, O,
    X, X, X
>

type TestRowIndices = BoardUnfilledRowIndices<BoardFixture>
