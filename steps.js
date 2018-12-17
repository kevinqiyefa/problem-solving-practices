// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character recursively.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, step = '') {
  if (n === row) return;

  if (step.length === n) {
    console.log(step);
    return steps(n, row + 1);
  }
  if (step.length <= row) {
    step += '#';
  } else {
    step += ' ';
  }
  steps(n, row++, step);
}

steps(4);
// #
// ##
// ###
// ####
