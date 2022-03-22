//HELPERS
const salariosCh = salariosChile.map((s) => {
    return s.salario;
});

const salariOrdenado = salariosCh.sort((salario1, salario2) => {
    return salario1 - salario2;
});

function esPar(numero) {
    return (numero % 2 === 0);
}
function promedioSalarial(salary) {
    // let sumaSueldos = 0;
    // let contador=0;
    // for(let i =0; i<salary.length; i++) {
    //     sumaSueldos += salary[i];
    //     contador++;
    // }
    // let promedio = sumaSueldos/contador;
    const suma = salary.reduce((i = 0, elemento) => {
        return i + elemento;
    });
    const promedio = parseInt(suma / salary.length);
    return promedio;
}
//MEDIA SALARIAL
function calcularMediaSalarial(array) {
    const mitadArray = parseInt(array.length / 2);
    var mediana;
    if (esPar(array.length)) {
        var elemento1 = array[mitadArray - 1];
        var elemento2 = array[mitadArray];
        //var promedio = (elemento1+elemento2)/2
        mediana = promedioSalarial([elemento1, elemento2]);
        return mediana;
    } else {
        mediana = array[mitadArray];
        return mediana;
    }

}
//MEDIA GENERAL
const promedio = salariOrdenado.map((a, b) => {
    return a - b;
});
//MEDIA SALARIAL TOP 10
const spliceStart = parseInt((salariOrdenado.length * 90) / 100);
const spliceCount = salariOrdenado.length - spliceStart;
const salarioTop10 = salariOrdenado.splice(
    spliceStart,
    spliceCount);
//CONSTANTES DE MEDIA GENERAL Y MEDIA 
const mediaSalarialTop10 = calcularMediaSalarial(salarioTop10);
const mediaSalarialGeneral = calcularMediaSalarial(promedio);
console.log({
    mediaSalarialTop10,
    mediaSalarialGeneral
});

// function calcularImpuesto(monto, impuesto) {
//     const iva = impuesto / 100;
//     const totalSinIva = ((monto * (100 - impuesto)) / 100);
//     const totalConIva= monto - totalSinIva;
//     const totalDefinitivo = totalConIva + monto;
//     return totalDefinitivo;
// }