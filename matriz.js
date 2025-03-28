function verificarNumeroNaMatriz(matriz, numero) {
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] === numero) {
          return true; // Número encontrado
        }
      }
    }
    return false; // Número não encontrado
  }
  
  // Exemplos de uso
  const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const numero1 = 5;
  const numero2 = 10;
  
  console.log(`O número ${numero1} está na matriz? ${verificarNumeroNaMatriz(matriz, numero1)}`); // Saída: true
  console.log(`O número ${numero2} está na matriz? ${verificarNumeroNaMatriz(matriz, numero2)}`); // Saída: false

  // O(c*l) onde c=número de colunas and l= numero de linhas