# Type-Level Tic-Tac-Toe

It's a game of Tic-Tac-Toe, but _in the Type System!_ Wow! 

## Installation
Just clone it and run `yarn` to install the dependencies.


## Usage
Just look at the `src/index.ts` file.
Perform a move by accessing the `placeX` or `placeO` property of the `NewGame` object.


```ts
import { NewGame } from 'tictactoe'

const NewGame = {} as NewGame

const GameState = NewGame
  .placeX[0][0]
  .placeO[0][1]
  .placeX[1][1]
  .placeO[0][2]
  .placeX[2][2]
```

Peak the type of the `GameState` variable to see the current state of the game.
[Here's an example](https://github.com/snrogers/typelevel-tictactoe/blob/master/example.png)
