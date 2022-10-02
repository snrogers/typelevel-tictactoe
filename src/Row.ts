import { IsSpaceTaken, O, Space, X } from './Space'

export type AnyRow = Row<any, any, any>
export type Row<_0 extends Space, _1 extends Space, _2 extends Space> =
  { 0: _0, 1: _1, 2: _2 }

export type RowIdx = 0 | 1 | 2

// ----------------------------------------------------------------- //
// Functions
// ----------------------------------------------------------------- //
export type RowPlaceMark
  < M extends X | O
  , J extends 0 | 1 | 2
  , R extends AnyRow
  > = R extends Row<infer _0, infer _1, infer _2>
      ? J extends 0 ? Row<M, _1, _2>
        : J extends 1 ? Row<_0, M, _2>
        : J extends 2 ? Row<_0, _1, M>
        : never // 'MALFORMED COLUMN INDEX'
      : never // ' MALFORMED ROW'

export type IsRowSpaceTaken<I extends RowIdx, R extends AnyRow> =
  R extends Row<infer _0, infer _1, infer _2>
    ? I extends 0 ? IsSpaceTaken<_0>
    : I extends 1 ? IsSpaceTaken<_1>
    : I extends 2 ? IsSpaceTaken<_2>
    : never
  : never
