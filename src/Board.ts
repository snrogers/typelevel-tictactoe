import { Column } from './Column'
import { Row, RowPlaceMark } from './Row'
import { O, Space, X, _ } from './Space'


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
