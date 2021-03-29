// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[undefined, undefined],
//     [undefined, undefined]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function spiralMatrix(n) {
	let matrix = [];
	let value = 1;
	for (let i = 0; i < n; i++) {
		matrix.push([]);
	}

	let start_row = 0,
		start_col = 0,
		end_row = n - 1,
		end_col = n - 1;

	while (start_row <= end_row && start_col <= end_col) {
		//top row
		for (let i = start_col; i <= end_col; i++) {
			matrix[start_row][i] = value;
			value++;
		}
		start_row++;

		//right column
		for (let i = start_row; i <= end_row; i++) {
			matrix[i][end_col] = value;
			value++;
		}
		end_col--;

		//bottom row
		if (start_row <= end_row) {
			for (let i = end_col; i >= start_col; i--) {
				matrix[end_row][i] = value;
				value++;
			}
			end_row--;
		}

		//left column
		if (start_col <= end_col) {
			for (let i = end_row; i >= start_row; i--) {
				matrix[i][start_col] = value;
				value++;
			}
			start_col++;
		}
	}
	return matrix;
}

spiralMatrix(3);
