//FUNCION DE CALCULO ALTURA DE UN TRIANGULO ISOSCELES
function calculoAltura(base,cateto){
    var altura= Math.sqrt((cateto*cateto)-(base*base/4));
    return altura;

}

console.log("funcionando");