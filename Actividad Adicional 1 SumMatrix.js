function SumMatrix(mtrz1, mtrz2) {
  let y = 0;
  let x = 0;
  let mtrzRes = new Array(mtrz1.length);

  for (y = 0; y < mtrz1.length; y++) {
    if (mtrz1.length != mtrz2.length || mtrz1[y].length != mtrz2[y].length) {
      return -1;
    }
  }

  for (let j = 0; j < mtrz1.length; j++) {
    mtrzRes[j] = new Array(mtrz1[j].length);

    for (let i = 0; i < mtrz1[j].length; i++) {
      mtrzRes[j][i] = 0;
    }
  }

  for (y = 0; y < mtrzRes.length; y++) {
    for (x = 0; x < mtrzRes[y].length; x++) {
      mtrzRes[y][x] = mtrz1[y][x] + mtrz2[y][x];
    }
  }

  return mtrzRes;
}

let mtrz1 = [
  [1, 2, 9],
  [3, 4, 10],
];
let mtrz2 = [
  [5, 6, 11],
  [7, 8, 12],
];
console.log(SumMatrix(mtrz1, mtrz2));