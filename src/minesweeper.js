const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
    for (let i = 1; i < numberOfRows; i++) {
      let row = [];
        for (let j = 1; j < numberOfColumns; j++) {
          row.push(' ');
        }
        board.push(row);
    }
    return board;
};


const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
    for (let i = 1; i < numberOfRows; i++) {
      let row = [];
        for (let j = 1; j < numberOfColumns; j++) {
          row.push(null);
        }
        board.push(row);
    }
    return board;
    
    //Represent the bomb counter
    let numberOfBombsPlaced = 0;

    while (numberOfBombsPlaced < numberOfBombs) {
      //Generate random location on board
      let randomRowIndex = Math.floor(Math.random() * numberOfRows);
      let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
      board[randomRowIndex][randomColumnIndex] = 'B';
      //this may place bombs on top of bombs
      numberOfBombsPlaced += 1;
    };
};


const printBoard = board => {
  board.map(row => row.join(' | ')).join('\n');

};

//generatePlayerBoard(4,4);

