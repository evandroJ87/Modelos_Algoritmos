//sistema de busca binária O(log n)


function pesquisaBinaria(lista, item) {
    let baixo = 0;
    let alto = lista.length - 1;
  
    while (baixo <= alto) {
      const meio = Math.floor((baixo + alto) / 2); // Correção: divisão inteira
      const chute = lista[meio];
      if (chute === item) {
        return meio;
      }
      if (chute > item) {
        alto = meio - 1;
      } else {
        baixo = meio + 1;
      }
    }
    return null;
  }
  
  // Exemplos de uso
  const listaOrdenada = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
  const elementoProcurado = 91;
  
  const indiceEncontrado = pesquisaBinaria(listaOrdenada, elementoProcurado);
  
  if (indiceEncontrado !== null) {
    console.log(`Elemento ${elementoProcurado} encontrado no índice ${indiceEncontrado}.`);
  } else {
    console.log(`Elemento ${elementoProcurado} não encontrado na lista.`);
  }
  
  const elementoProcurado2 = 42;
  
  const indiceEncontrado2 = pesquisaBinaria(listaOrdenada, elementoProcurado2);
  
  if (indiceEncontrado2 !== null) {
    console.log(`Elemento ${elementoProcurado2} encontrado no índice ${indiceEncontrado2}.`);
  } else {
    console.log(`Elemento ${elementoProcurado2} não encontrado na lista.`);
  }