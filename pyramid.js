// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character recursively.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
  let mid = ((2 * n - 1) / 2) >> 0;
  if (n === row) return;

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  if (level.length >= mid - row && level.length <= mid + row) {
    level += '#';
  } else {
    level += ' ';
  }

  pyramid(n, row, level);
}
pyramid(3);
//   #
//  ###
// #####
