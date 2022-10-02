import { InterpretAction, PlaceMarkAction } from './Actions'
import { ColumnIdx } from './Column'
import { O, X, _ } from './Space'
import { AnyGameData, GetNextToMove } from './Game'
import { IsBoardSpaceTaken } from './Board'

export type MoveInterface<
  GD  extends AnyGameData,
  M   extends X | O     = GetNextToMove<GD['state']>,
  Key extends 'X' | 'O' = M extends X ? 'X' : 'O'
> = { [key in `place${Key}`]:
      { 0: { 0: IsBoardSpaceTaken<0, 0, GD['board']> extends true ? 'TAKEN' : InterpretAction<PlaceMarkAction<M, 0, 0>, GD>
           , 1: IsBoardSpaceTaken<0, 1, GD['board']> extends true ? 'TAKEN' : InterpretAction<PlaceMarkAction<M, 0, 1>, GD>
           , 2: IsBoardSpaceTaken<0, 2, GD['board']> extends true ? 'TAKEN' : InterpretAction<PlaceMarkAction<M, 0, 2>, GD>
           }
      , 1: { 0: IsBoardSpaceTaken<1, 0, GD['board']> extends true ? 'TAKEN' : InterpretAction<PlaceMarkAction<M, 1, 0>, GD>
           , 1: IsBoardSpaceTaken<1, 1, GD['board']> extends true ? 'TAKEN' : InterpretAction<PlaceMarkAction<M, 1, 1>, GD>
           , 2: IsBoardSpaceTaken<1, 2, GD['board']> extends true ? 'TAKEN' : InterpretAction<PlaceMarkAction<M, 1, 2>, GD>
           }
      , 2: { 0: IsBoardSpaceTaken<2, 0, GD['board']> extends true ? 'TAKEN' : InterpretAction<PlaceMarkAction<M, 2, 0>, GD>
           , 1: IsBoardSpaceTaken<2, 1, GD['board']> extends true ? 'TAKEN' : InterpretAction<PlaceMarkAction<M, 2, 1>, GD>
           , 2: IsBoardSpaceTaken<2, 2, GD['board']> extends true ? 'TAKEN' : InterpretAction<PlaceMarkAction<M, 2, 2>, GD>
           }
      }
    }

export type RenderRowUI<J extends ColumnIdx, GD extends AnyGameData> =
  { }
