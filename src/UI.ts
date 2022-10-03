import { InterpretAction, PlaceMarkAction } from './Actions'
import { O, X, _ } from './Space'
import { AnyGameData, GetNextToMove } from './Game'
import { RowFreeSpace, RowIdx } from './Row'

export type MoveInterface<
  GD  extends AnyGameData,
  M   extends X | O     = GetNextToMove<GD['state']>,
  Key extends 'X' | 'O' = M extends X ? 'X' : 'O'
> = {
  [key in `place${Key}`]: {
    [I in RowIdx]: MoveInterfaceRow<I, M, GD>
  }
}

export type MoveInterfaceRow<I extends RowIdx, M extends X | O, GD extends AnyGameData> =
{ [J in RowFreeSpace<GD['board'][I]>]: InterpretAction<PlaceMarkAction<M, I, J>, GD>
}

// export type RenderRowUI<M extends X | O, GD extends AnyGameData> =
//   { 0: MoveInterfaceRow<0, M, GD>
//   , 1: MoveInterfaceRow<1, M, GD>
//   , 2: MoveInterfaceRow<2, M, GD>
//   }
