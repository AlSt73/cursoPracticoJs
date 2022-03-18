//FUNCION DE CALCULO ALTURA DE UN TRIANGULO ISOSCELES
function calculoAltura(base,cateto){
    var altura= Math.sqrt((cateto*cateto)-(base*base/4));
    return Math.round(altura);
    
}

function calcularAlturaTriangulo(cateto1,cateto2,base){
    var c1 = parseInt(document.getElementById("cateto1").value);
    var c2 = parseInt(document.getElementById("cateto2").value);
    var base = parseInt(document.getElementById("base").value);
    if(c1 === c2){
        var altura = calculoAltura(base,c1);
        var resultado = `<h3>La altura es ${altura}</h3>`;
        document.querySelector("h3").innerHTML = `${resultado}`;
    }else{
        document.querySelector("h3").innerHTML = "Error los catetos no son iguales por ende tu triangulo no es un isosceles";
    }
    


}

console.log("funcionando");