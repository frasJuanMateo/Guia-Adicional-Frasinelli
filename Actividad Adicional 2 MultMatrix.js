function MultMatrix(A, B) {
    if (A[0].length !== B.length) {
      //Chequea que la cantidad de columnas de A sea igual a la cantidad de filas de B (No se pueden multiplicar si no)
      return "La cantidad de columnas de A no es igual a la cantidad de filas de B";
    }
    //Crea un array con la cantidad de filas de A
    let C = new Array(A.lenght);
  
    for (let j = 0; j < A.length; j++) {
      //Inserta la cantidad de columnas de B en cada fila
      C[j] = new Array(B[0].length);
  
      for (let i = 0; i < B[0].length; i++) {
        //Le da el valor 0 a todos los elementos de la matriz para señalar que son valores numericos
        C[j][i] = 0;
      }
    }
  
    for (let y = 0; y < A.length; y++) {
      for (let x = 0; x < B[0].length; x++) {
        for (let index = 0; index < A[0].length; index++) {
          C[y][x] = C[y][x] + A[y][index] * B[index][x];
          //Declara cada valor de la matriz C como el resultado de la multiplicacion de los elementos de las filas de A y las columnas de B para su posterior suma
        }
      }
    }
    return C;
  }
  
  let A = [
    [-2, 3],
    [-5, 1],
    [0, -6],
  ];
  let B = [
    [1, -5, 0],
    [-8, 9, 2],
  ];
  //¡¡Solo usar con matrices cuadradas o rectangulares!!
  console.log(MultMatrix(A, B));  