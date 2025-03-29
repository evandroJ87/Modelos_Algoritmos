function mergeSort(array) {
    if (array.length <= 1) {
      return array; // Caso base: lista vazia ou com um elemento já está ordenada
    }
  
    const meio = Math.floor(array.length / 2);
    const esquerda = array.slice(0, meio);
    const direita = array.slice(meio);
  
    return merge(mergeSort(esquerda), mergeSort(direita)); // Ordena e combina as sublistas
  }
  
  function merge(esquerda, direita) {
    const resultado = [];
    let i = 0;
    let j = 0;
  
    while (i < esquerda.length && j < direita.length) {
      if (esquerda[i] < direita[j]) {
        resultado.push(esquerda[i]);
        i++;
      } else {
        resultado.push(direita[j]);
        j++;
      }
    }
  
    return resultado.concat(esquerda.slice(i)).concat(direita.slice(j)); // Combina os elementos restantes
  }
  
  // Exemplo de uso
  const lista = [10, 8, 2, 6, 4, 9, 1, 5, 3, 7];
  const listaOrdenada = mergeSort(lista);
  console.log(listaOrdenada); // Saída: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]