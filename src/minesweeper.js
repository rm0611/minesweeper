class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }
  playMove(rowIndex, columnIndex) {
    this._board.flipTile(rowIndex, columnIndex);
    if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
      console.log('GAME OVER!');
      this._board.print();
    } else if (this._board.hasSafeTiles()) {
      console.log('Current Board: ');
      this._board.print();
    } else {
      console.log('Congrats! YOU WON');
      this._board.print();
    }

  }
}


class Board {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns;
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
  }

  get playerBoard() {
    return this._playerBoard;
  }

  //this portion will allow the user to flip the tile
  flipTile(flipRow, flipColumn) {
    if (this._playerBoard[flipRow][flipColumn] !== ' ') {
      console.log('This tile has already been flipped!');
      return;
    } else if (this._bombBoard[flipRow][flipColumn] == 'B') {
      this._playerBoard[flipRow][flipColumn] == 'B';
    } else {
      this._playerBoard[flipRow][flipColumn] = this.getNumberOfNeighborBombs(flipRow, flipColumn);
    }
    this._numberOfTiles--;
  }

  //this portion will display the number of bombs adjacent to the flipped tile
  getNumberOfNeighborBombs(flipRow, flipColumn) {
    const neighborOffsets = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];
    const numberOfRows = this._bombBoard.length;
    const numberOfColumns = this._bombBoard[0].length;

    let numberOfNeighborBombs = 0;

    neighborOffsets.forEach(offset => {
      const neighborRowIndex = flipRow + offset[0];
      const neighborColumnIndex = flipColumn + offset[1];
      if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
        if (this._bombBoard[neighborRowIndex][neighborColumnIndex] == 'B') {
          numberOfNeighborBombs++;
        }
      };
    });
    return numberOfNeighborBombs;
  };

  hasSafeTiles() {
    return this._numberOfTiles !== this._numberOfBombs;
  }


  //this portion is to print the actual board
  print() {
    console.log(this._playerBoard.map(row => row.join(' | ')).join('\n'));
  };

  //This portion is to generate the board which the players will interact
  static generatePlayerBoard(numberOfRows, numberOfColumns) {
    const board = [];
    for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
      const row = [];
      for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
        row.push(' ');
      };
      board.push(row);
    };
    return board;
  }

  //This portion is to generate the board which the bombs will be placed upon
  static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
    const board = [];
    for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
      const row = [];
      for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
        row.push(null);
      };
      board.push(row);
    };

    //now we need to actually place the numberOfBombs on to our board
    let numberOfBombsPlaced = 0;
    while (numberOfBombsPlaced < numberOfBombs) {
      //put a bomb in a random row and a random column
      const randomRowIndex = Math.floor(Math.random() * numberOfRows);
      const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

      if (board[randomRowIndex][randomColumnIndex] !== 'B') {
        //now that we have a random row and a column, we want to put a bomb there
        board[randomRowIndex][randomColumnIndex] = 'B';
        //this line below makes sure that the while loop will eventually end
        numberOfBombsPlaced++;

      };
    };
    return board;
  }

}

/*
const g = new Game(3, 3, 3);
g.playMove(0, 0);*/