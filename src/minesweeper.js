/*
//make the board of the player
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
    for (let i = 0; i < numberOfRows; i++) {
      let row = [];
        for (let j = 0; j < numberOfColumns; j++) {
          row.push(' ');
        }
        board.push(row);
    }
    return board;
};

//make the board of the bomb that will be placed
const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
    for (let i = 0; i < numberOfRows; i++) {
      let row = [];
        for (let j = 0; j < numberOfColumns; j++) {
          row.push(null);
        }
        board.push(row);
    }
    
    //Represent the bomb counter
    let numberOfBombsPlaced = 0;
    while (numberOfBombsPlaced < numberOfBombs) {
      //Generate random location on board
      let randomRowIndex = Math.floor(Math.random() * numberOfRows);
      let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
      board[randomRowIndex][randomColumnIndex] = 'B';
      //note: this has the possibility to place bombs on top of existing bombs
      numberOfBombsPlaced++;
    }
    return board;
};


const printBoard = (board) => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

//test print the game board
let playerBoard = generatePlayerBoard(5,5);
let bombBoard = generateBombBoard(5,5,3);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);

*/

const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  const board = [];
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    const row = [];
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      row.push(' ');
    };
    board.push(row);
  };
  return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
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
};

//this portion will display the number of bombs adjacent to the flipped tile
let getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
  let neighborOffsets = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  const numberOfRows = bombBoard.length;
  const numberOfColumns = bombBoard[0].length;
  let numberOfBombs = 0;

  neighborOffsets.forEach(offset => {
    const neighborRowIndex = rowIndex + offset[0];
    const neighborColumnIndex = columnIndex + offset[1];
    if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
      if (bombBoard[neighborRowIndex][neighborColumnIndex] == 'B') {
        numberOfBombs++;
      }
    };
  });
  return numberOfBombs;
};

//this portion will allow the user to flip the tile
const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
  if (playerBoard[rowIndex][columnIndex] !== ' ') {
    console.log('This tile has already been flipped!');
    return;
  } else if (bombBoard[rowIndex][columnIndex] == 'B') {
      playerBoard[rowIndex][columnIndex] == 'B';
  } else {
      playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
  }
}; 


const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
}

const playerBoard = generatePlayerBoard(3, 3);
const bombBoard = generateBombBoard(3, 3, 2);

flipTile(playerBoard, bombBoard, 0, 0);
console.log('Updated Player Board: ')
printBoard(playerBoard);
console.log('Bomb Board: ')
printBoard(bombBoard);