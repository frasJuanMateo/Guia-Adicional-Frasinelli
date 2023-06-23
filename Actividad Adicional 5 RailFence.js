function RailFence(string, railKey) {
    let mtrz = new Array(railKey);
    let cicle = 1;
  
    for (let j = 0; j < railKey; j++) {
      mtrz[j] = new Array(string.length);
  
      for (let i = 0; i < string.length; i++) {
        mtrz[j][i] = "";
      }
    }
    
    let arr = string.split("");
    for (let x = 0, y = 0; x < arr.length; x++, y += cicle) {
      mtrz[y][x] = arr[x];
  
      if (y % (railKey - 1) == 0 && x !== 0) {
        cicle *= -1;
      }
    }
    let newArr = [];
    for (let y = 0; y < railKey; y++) {
      newArr[y] = mtrz[y].join("");
    }
    let newString = newArr.join("");
    return newString;
  }
  
  let string = "THISISASECRETMESSAGE";
  console.log(RailFence(string, 4));