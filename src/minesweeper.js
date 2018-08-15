const exampleBoard = [ 
  [' ', ' ', ' '], 
  [' ', ' ', ' '],
  [' ', ' ', ' ']
  ];


const printBoard = board => {
  //Log 'Current Board: ';
  console.log('Current Board: ');
  //Log the first element of the board variable
  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
  };

printBoard(exampleBoard);
exampleBoard[0][1] = '1';
exampleBoard[2][2] = 'B';
printBoard(exampleBoard);