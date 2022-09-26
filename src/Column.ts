import { Space } from './Space'

export type AnyColumn = Column<any, any, any>
export type Column<_0 extends Space, _1 extends Space, _2 extends Space> =
  { 0: _0, 1: _1, 2: _2 }

