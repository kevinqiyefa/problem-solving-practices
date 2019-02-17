//3. Connect4
console.log('\n#3. Connect Four');

function connect4(pos) {
  let tableArray = [[], [], [], [], [], [], []];
  let colIdx = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6 };

  for (let p of pos) {
    //place in table
    let colVal = p.split('_');
    //the first half is the col
    //and the second half is the color
    let idx = colIdx[colVal[0]];

    tableArray[idx].push(colVal[1]);

    //check for winner after placing a color in the table array.
    let winner = checkForWinner(tableArray);
    if (winner) {
      return winner;
    }
  }
  return 'Draw';
}

const checkForWinner = tableArr => {
  //loop through the columns
  for (let i = 0; i < 7; i++) {
    //loop through the array for each col.
    for (let j = 0; j < tableArr[i].length; j++) {
      //for each position, check for its 4 vertical, //horizontal, diagonalUp,and diagonalDown positions.
      if (isConnect4(tableArr, i, j)) {
        return tableArr[i][j];
      }
    }
  }
};

const isConnect4 = (tableArr, x, y) => {
  const vert = [[x, y], [x, y + 1], [x, y + 2], [x, y + 3]];
  const horiz = [[x, y], [x + 1, y], [x + 2, y], [x + 3, y]];
  const diagUp = [[x, y], [x + 1, y + 1], [x + 2, y + 2], [x + 3, y + 3]];
  const diagDn = [[x, y], [x + 1, y - 1], [x + 2, y - 2], [x + 3, y - 3]];

  if (
    isWin(tableArr, vert, tableArr[x][y]) ||
    isWin(tableArr, horiz, tableArr[x][y]) ||
    isWin(tableArr, diagUp, tableArr[x][y]) ||
    isWin(tableArr, diagDn, tableArr[x][y])
  ) {
    return true;
  }
};

//check the boundary and all the fourIndex are the same color.
const isWin = (table, fourIdxs, color) => {
  return fourIdxs.every(([x, y]) => x <= 6 && table[x][y] === color);
};

let piecesPositionList1 = [
  'A_Yellow',
  'B_Red',
  'B_Yellow',
  'C_Red',
  'G_Yellow',
  'C_Red',
  'C_Yellow',
  'D_Red',
  'G_Yellow',
  'D_Red',
  'G_Yellow',
  'D_Red',
  'F_Yellow',
  'E_Red',
  'D_Yellow'
];

let piecesPositionList2 = [
  'A_Red',
  'B_Yellow',
  'A_Red',
  'E_Yellow',
  'F_Red',
  'G_Yellow',
  'A_Red',
  'G_Yellow'
];

console.log(connect4(piecesPositionList1));
console.log(connect4(piecesPositionList2));
