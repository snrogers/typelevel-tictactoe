/* eslint-disable @typescript-eslint/no-unused-vars */
import { game, InspectGame } from './Game'
import { Row, RowFreeSpace } from './Row'
import { O, X, _ } from './Space'

type game = typeof game
type gameData = InspectGame<game['placeX'][1][2]>
type gameRow = Row<_, O, _>
type thing = RowFreeSpace<gameRow>

const gameState = game
  .placeX[0][0]
  .placeO[0][1]
  .placeX[0][2]
