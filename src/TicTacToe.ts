/* eslint-disable @typescript-eslint/no-unused-vars */
import { AnyBoard, Board, BoardColumn, NewBoard, PlaceMark } from './Board'
import { AnyRow, Row } from './Row'
import { Column } from './Column'
import { O, Space, X, _ } from './Space'
import { InterpretAction, PlaceMarkAction } from './Actions'

export type GameState = 'X WINS' | 'O WINS' | 'X TO MOVE' | 'O TO MOVE'
export type AnyGameData = GameData<AnyBoard, GameState>
export type GameData<
  CurrentBoard extends AnyBoard,
  State extends GameState
> = {
  state: State
  board: CurrentBoard
}

export type GetNextToMove<GS extends GameState> =
  GS extends 'X TO MOVE' ? X :
  GS extends 'O TO MOVE' ? O :
  never

// TODO: Don't expose commands to overwrite taken spaces
type MoveInterface<
  GD extends AnyGameData,
  M extends X | O = GetNextToMove<GD['state']>,
  Key extends 'X' | 'O' = M extends X ? 'X' : 'O'
> = { [key in `place${Key}`]:
      { 0: { 0: InterpretAction<PlaceMarkAction<M, 0, 0>, GD>
           , 1: InterpretAction<PlaceMarkAction<M, 0, 1>, GD>
           , 2: InterpretAction<PlaceMarkAction<M, 0, 2>, GD>
           }
      , 1: { 0: InterpretAction<PlaceMarkAction<M, 1, 0>, GD>
           , 1: InterpretAction<PlaceMarkAction<M, 1, 1>, GD>
           , 2: InterpretAction<PlaceMarkAction<M, 1, 2>, GD>
           }
      , 2: { 0: InterpretAction<PlaceMarkAction<M, 2, 0>, GD>
           , 1: InterpretAction<PlaceMarkAction<M, 2, 1>, GD>
           , 2: InterpretAction<PlaceMarkAction<M, 2, 2>, GD>
           }
      }
    }


const GameStateKey: unique symbol = Symbol()
type GameStateKey = typeof GameStateKey

export type AnyGame = Game<AnyGameData>
export type Game<GD extends AnyGameData> =
  { [GameStateKey]: GD }
  & MoveInterface<GD>
type NewGame = Game<GameData<NewBoard, 'X TO MOVE'>>

type Test = MoveInterface<GameData<NewBoard, 'X TO MOVE'>, X>
// ----------------------------------------------------------------- //
// Testing
// ----------------------------------------------------------------- //
export const game = null as unknown as NewGame
const move1 = game.placeX[0][0]
const move2 = move1.placeO[1][0]
const move3 = move2.placeX[1][1]

const game2Result =
  game
  .placeX[0][0]
  .placeO[0][2]
  .placeX[1][1]
  .placeO[2][1]
  .placeX[2][2]
  // .placeO[1][0]
