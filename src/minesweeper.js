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
    const row =[];
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

console.log(generatePlayerBoard(3,4));





