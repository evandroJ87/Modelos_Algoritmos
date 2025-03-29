function mesclarESublinhar(nums1, nums2) {
    // Mescla os arrays nums1 e nums2
    const arrayMesclado = [...nums1, ...nums2];
  
    // Ordena o array mesclado em ordem crescente
    arrayMesclado.sort((a, b) => a - b);
  
    // Cria uma nova string com os elementos sublinhados
    const arraySublinhado = arrayMesclado.map(elemento => {
      if (nums1.includes(elemento)) {
        return `<u>${elemento}</u>`; // Sublinha os elementos de nums1
      } else {
        return elemento; // Mantém os elementos de nums2 sem sublinhado
      }
    });
  
    // Retorna o array formatado como string
    return arraySublinhado.join(', ');
  }
  
  // Exemplo de uso
  const nums1 = [1, 2, 3];
  const nums2 = [2, 5, 6];
  
  const resultado = mesclarESublinhar(nums1, nums2);
  console.log(resultado); // Saída: "<u>1</u>, <u>2</u>, 2, <u>3</u>, 5, 6"