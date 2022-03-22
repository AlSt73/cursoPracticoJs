// const lista = [
//     2,
//     4,
//     5,
//     5,
//     3,
//     2,
//     2,
//     4,
//     4,
//     1,
//     4,
//     4,
//     1
// ];

// const lista1Cuenta ={};

// lista.map((elemento)=>{
//     if(lista1Cuenta[elemento]){
//         lista1Cuenta[elemento] += 1;
//     }else{
//         lista1Cuenta[elemento] = 1;
//     }

// });

// const lista1Array = Object.entries(lista1Cuenta).sort((elementoA,elementoB)=>{
//     return elementoA[1] - elementoB[1];

// });

const lista=[2,5,5,6,6,6,1,6];

function calcularModa(arreglo){
    const arregloCount ={};

    arreglo.map((elemento)=>{
        if(arregloCount[elemento]){
            arregloCount[elemento] +=1;
        }else{
            arregloCount[elemento]=1;
        }
    });
    
    const objetoConvertidoArreglo = Object.entries(arregloCount).sort((e1,e2)=>{
        return e1-e2;
    });

    const moda = objetoConvertidoArreglo[objetoConvertidoArreglo.length-1];
    return moda;

}

console.log(calcularModa(lista));