// QuickSort é um algoritmo de ordenação que tem como objetivo ordenar uma lista de forma crescente.
// A complexidade de tempo é O(n log n) no caso médio
// no pior caso é O(n^2)

function quickSort (array) {
    if (array.length <=1 ){
        return array; // Caso o array esteja vazio, ou tenha apenas um item. Consequentemente o mesmo já está ordenado
    }
    const pivot = array[0];
    const esquerda = [];
    const direita = [];

    for (let i=1;i<array.length;i++) {
        if (array[i]<pivot){
            esquerda.push(array[i]);
        }
        else {
            array[i]>pivot
            direita.push(array[i])
        }
    }
    return [...quickSort(esquerda), pivot, ...quickSort(direita)];
}

const lista = [9,5,7,3,2,1,4,6];
const listaOrdenada = quickSort(lista);
console.log(listaOrdenada);