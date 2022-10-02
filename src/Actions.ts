import { BoardColumn, PlaceMark } from './Board'
import { Column } from './Column'
import { Row } from './Row'
import { O, X } from './Space'
import { AnyGameData, Game, GameData } from './TicTacToe'
import { ComputeFlat } from './Utils'

export type AnyAction = AnyPlaceMarkAction

export type AnyPlaceMarkAction = PlaceMarkAction<X | O, 0 | 1 | 2, 0 | 1 | 2>
export type PlaceMarkAction<
  M extends X | O,
  I extends 0 | 1 | 2,
  J extends 0 | 1 | 2
> =
  { type: 'PLACE_MARK'
  , mark: M
  , I: I
  , J: J
  }

type IsWinner<
  M extends X | O,
  GD extends AnyGameData,
> =
  GD['board'][0]                                                 extends Row<M, M, M>    ? true // Top
  : GD['board'][1]                                               extends Row<M, M, M>    ? true // Horizontal
  : GD['board'][2]                                               extends Row<M, M, M>    ? true // Bottom
  : BoardColumn<0, GD['board']>                                  extends Column<M, M, M> ? true // Left
  : BoardColumn<1, GD['board']>                                  extends Column<M, M, M> ? true // Vertical
  : BoardColumn<2, GD['board']>                                  extends Column<M, M, M> ? true // Right
  : Row<GD['board'][0][0], GD['board'][1][1], GD['board'][2][2]> extends Row<M, M, M>    ? true // TopLeft -> BottomRight
  : Row<GD['board'][2][0], GD['board'][1][1], GD['board'][0][2]> extends Row<M, M, M>    ? true // BottomLeft -> TopRight
  : false

export type FindWinnerOrSwitchPlayers<GD extends AnyGameData> =
  IsWinner<X, GD> extends true        ? GameData<GD['board'], 'X WINS'>    :
  IsWinner<O, GD> extends true        ? GameData<GD['board'], 'O WINS'>    :
  GD['state']     extends 'X TO MOVE' ? GameData<GD['board'], 'O TO MOVE'> :
  GD['state']     extends 'O TO MOVE' ? GameData<GD['board'], 'X TO MOVE'> :
  never

export type InterpretAction<
  A extends AnyAction,
  GD extends AnyGameData
> =
    A extends PlaceMarkAction<infer M, infer I, infer J>
    ? Game<FindWinnerOrSwitchPlayers<GameData<ComputeFlat<PlaceMark<M, I, J, GD['board']>>, GD['state']>>>
    : GD
