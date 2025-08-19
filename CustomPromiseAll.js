function customPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Input must be an array"));
    }

    const results = [];
    let completed = 0;

    promises.forEach((p, index) => {
      // Ensure p is a promise
      Promise.resolve(p)
        .then((value) => {
          results[index] = value; // maintain order
          completed += 1;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => reject(err)); // reject immediately on error
    });

    // Handle empty array
    if (promises.length === 0) {
      resolve([]);
    }
  });
}
