// algoritmo de busca simples

function busca (lista,item){
    for (let i=0;i<lista.length;i++){
        if (lista[i] === item){
            return i
        }
    }
    return -1
}

const lista = [10,20,30,40,50];
const item = 30;

const indice = busca (lista,item)

if (indice !== -1){
    console.log(`O item procurado é o ${indice}`)
}

