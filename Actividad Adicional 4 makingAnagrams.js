function anagram(string) {
    let arr = string.split("");
    let oldIndex = [-1];
    let randomNumer = 0;
    let newArr = [];
    let buleano = false;
  
    for (let index = 0; index < arr.length; index++) {
      randomNumber = Math.floor(Math.random() * arr.length);
  
      while (oldIndex.includes(randomNumber)) {
        randomNumber = Math.floor(Math.random() * arr.length);
      }
  
      oldIndex[index] = randomNumber;
      newArr[index] = arr[randomNumber];
    }
  
    let newString = newArr.join("");
    return newString;
  }
  
  function makingAnagrams(mtrz) {
    for (let y = 0; y < mtrz.length; y++) {
      for (let x = 0; x < mtrz[y].length; x++) {
        mtrz[y][x] = anagram(mtrz[y][x]);
      }
    }
    return mtrz;
  }
  
  let mtrz = [
    ["arbol", "casa", "leña"],
    ["river", "el mas", "grande"],
    ["caer", "en", "madrid"],
  ];
  console.log(makingAnagrams(mtrz));