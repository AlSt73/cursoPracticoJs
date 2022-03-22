// const lista1=[
//     1,10,2,21

// ];

// const mitadLista1 = parseInt(lista1.length /2);

// function esPar(numero){

//     if(numero.length % 2 ===0){
//         return true;
//     }else{
//         return false;
//     }
// }
// function averageSalary(salary){
//     let sumaSueldos = 0;
//     let contador=0;
//     for(let i =0; i<salary.length; i++) {
//         sumaSueldos += salary[i];
//         contador++;
//     }
//     let promedio = sumaSueldos/contador;
//     return promedio;

// }
// var mediana;

// if(esPar(lista1.length)){
//     var elemento1 = lista1[mitadLista1-1];
//     var elemento2 = lista1[mitadLista1 ];
//     var promedio = averageSalary([elemento1, elemento2]);

//     mediana = promedio;
// }else{
//     mediana = lista1[mitadLista1];
// }

// console.log(lista1);

const deuda = [300,100,666,440,220];

function calcularMedia(lista){
    lista.sort((a,b)=>{
        return a-b;
    });
    const mitadLista = parseInt(lista.length /2);
    var mediana;
    if(lista.length % 2===0){
        var elemento1= lista[mitadLista-1];
        var elemento2 = lista[mitadLista];
        var promedio = (elemento1+elemento2)/2;
        mediana=promedio;
        
    }else{
        mediana = lista[mitadLista];
        
    }   
    
    return mediana;
}