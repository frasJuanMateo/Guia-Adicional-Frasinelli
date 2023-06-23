function armstrong(n) {
    let arr = Array.from(String(n), Number);
    let res = 0;
    for (let index = 0; index < arr.length; index++) {
      res += arr[index] ** arr.length;
    }
  
    if (res === n) {
      return true;
    } else {
      return false;
    }
  }
  
  function checkValues(mtrz) {
    let mtrzRes = new Array(mtrz.length);
    
    for (let j = 0; j < mtrz.length; j++) {
      mtrzRes[j] = new Array(mtrz[j].length);
  
      for (let i = 0; i < mtrz[j].length; i++) {
        mtrzRes[j][i] = 0;
      }
    }
    
    for (let y = 0; y < mtrz.length; y++) {
      for (let x = 0; x < mtrz[y].length; x++) {
        mtrzRes[y][x] = armstrong(mtrz[y][x]);
      }
    }
    return mtrzRes;
  }
  
  
  let mtrz = [
    [32, 1, 1634],
    [12, 23, 153],
    [9, 407, 120],
  ];
  
  console.log(checkValues(mtrz));