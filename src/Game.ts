/* eslint-disable @typescript-eslint/no-unused-vars */
import { AnyBoard, Board, BoardColumn, BoardUnfilledRowIndices, NewBoard, PlaceMark } from './Board'
import { AnyRow, Row } from './Row'
import { Column } from './Column'
import { O, Space, X, _ } from './Space'
import { InterpretAction, PlaceMarkAction } from './Actions'
import { MoveInterface } from './UI'

export type GameState = 'X WINS' | 'O WINS' | 'X TO MOVE' | 'O TO MOVE'
export type AnyGameData = GameData<AnyBoard, GameState>
export type GameData<
  CurrentBoard extends AnyBoard,
  State extends GameState
> = {
  state: State
  board: CurrentBoard
}

// TODO: Don't expose commands to overwrite taken spaces
const GameDataKey: unique symbol = Symbol()
type GameDataKey = typeof GameDataKey

export type AnyGame = Game<AnyGameData>
export type Game<GD extends AnyGameData> =
  { [GameDataKey]: GD }
  & MoveInterface<GD>
export type NewGame = Game<GameData<NewBoard, 'X TO MOVE'>>


// ----------------------------------------------------------------- //
// Functions
// ----------------------------------------------------------------- //
export type InspectGame<G extends { [GameDataKey]: AnyGameData }> =
  G[GameDataKey]

export type IsSpaceTaken<I extends 0 | 1 | 2, J extends 0 | 1 | 2, GD extends AnyGameData>
  = GD['board'][I][J] extends X ? true
  : GD['board'][I][J] extends O ? true
  : false

export type GetNextToMove<GS extends GameState> =
  GS extends 'X TO MOVE' ? X :
  GS extends 'O TO MOVE' ? O :
  never

export type GameDataUnfilledRowIndices<GD extends AnyGameData> =
  BoardUnfilledRowIndices<GD['board']>

// ----------------------------------------------------------------- //
// Testing
// ----------------------------------------------------------------- //
export const game = null as unknown as NewGame
