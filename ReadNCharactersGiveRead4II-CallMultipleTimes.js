// 158. Read N Characters Give Read4 II - Call Multiple Times.js

// The API: int read4(char *buf) reads 4 characters at a time from a file.

// The return value is the actual number of characters read. For example, it returns 3 if there is only 3 characters left in the file.

// By using the read4 API, implement the function int read(char *buf, int n) that reads n characters from the file.

// Note:
// The read function may be called multiple times.

// Hide Company Tags Bloomberg Google Facebook
// Hide Tags String
// Hide Similar Problems (E) Read N Characters Given Read4

/**
 * Definition for read4()
 *
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */

var solution = function(read4) {
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Maximum number of characters to read
   * @return {number} The number of characters read
   */

  let remainIndex = 0;
  let size = 0;
  let remainBuf = Array(4);

  return function(buf, n) {
    let numCharRead = 0;

    while (numCharRead < n) {
      while (remainIndex < size && numCharRead < n) {
        buf[numCharRead++] = remainBuf[remainIndex];
      }

      if (remainIndex >= size) {
        remainIndex = 0;
        size = read4(remainBuf);
      }

      if (size === 0) {
        break;
      }
    }

    return numCharRead;
  };
};
