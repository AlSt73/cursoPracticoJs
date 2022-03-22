/*const sueldos = [300, 100,600,400];
let sumaSueldos = 0;
let cantidadSueldo=0;
for(let i =0; i<sueldos.length;i++) {
    sumaSueldos += sueldos[i];
    cantidadSueldo++;
}
let promedioSueldos = sumaSueldos/cantidadSueldo;
console.log(sumaSueldos);
console.log(promedioSueldos);*/

function averageSalary(salary){
    let sumaSueldos = 0;
    let contador=0;
    for(let i =0; i<salary.length; i++) {
        sumaSueldos += salary[i];
        contador++;
    }
    let promedio = sumaSueldos/contador;
    return promedio;

}

const sueldos = [300, 100,600,400];

averageSalary(sueldos);