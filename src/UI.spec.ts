import { Board, NewBoard } from './Board'
import { Row } from './Row'
import { X, _ } from './Space'
import { Game, GameData, InspectGame, NewGame } from './Game'
import { MoveInterface } from './UI'
import { Assert, ComputeFlat, Equals } from './Utils'

// ----------------------------------------------------------------- //
// Testing
// ----------------------------------------------------------------- //
type BoardFixture =
  Board< _, _, _
       , _, _, _
       , _, _, _
       >

type Test = InspectGame<NewGame>

type A = Test['placeX'][0][0]
type Test1 =
  Assert<Equals<
    A,
    {}
  >
>
type TestRow = Test['placeX'][0]
