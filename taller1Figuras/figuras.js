/*var ladoCuadrado = 5;
var perimetro = 5*4;
var area = 5*5

console.group("Cuadrado");
var vista = `
El lado del cuadrado es ${ladoCuadrado}cm
El perímetro del cuadrado es ${perimetro}cm
El area del cuadrado es ${area}`;
console.log(vista);

console.groupEnd();

console.group("Triangulo");
var base = 4;
var lado1 = 6;
var lado2 = 6;
var altura = 5.5;
var perimetro = base+lado1+lado2;
var area = (base *altura)/2;
var vista2=`
El lado1 del triangulo es ${lado1}cm
El lado2 del triangulo es ${lado2}cm
La base es ${base}cm
El perimetro es ${perimetro}cm
El area es ${area}cm2`;


console.log(vista2);
console.groupEnd();

console.group("Circulos");
var radio = 4;
var diametro = radio*2
var pi= Math.PI;
var perimetro = pi*diametro;
var area = (radio*radio)*pi;
var vista = `
El radio es ${radio}cm
El diametro es ${diametro}cm
El perimetro es ${perimetro}cm
el area es ${area}cm
`;
console.log(vista);



console.groupEnd();
*/
//FUNCIONES CALCULO CUADRADO
function perimetroCuadrado(lado){
    return lado * 4;
}
function areaCuadrado(lado){
    return lado * lado;
}

function calcularPerimetroCuadrado(lado){
    var valorLado = parseInt(document.getElementById("ladoCuadrado").value);
    
    if(valorLado >0){
        var perimetro = perimetroCuadrado(valorLado);
        alert(perimetro);

    }else{
        alert("Debe ingresar un numero");
    }
}
function calcularAreaCuadrado(lado){
    var valorLado = document.getElementById("ladoCuadrado").value;
    
    if(valorLado >0){
        var area = areaCuadrado(valorLado);
        alert(area);
    }else{
        alert("Debe ingresar un numero");
    }
}
//FUNCIONES CALCULO Triangulo
function perimetroTriangulo(lado1,lado2,base){
    var perimetro = lado1+lado2+base;
    return perimetro;

}
function areaTriangulo(base,altura){
    return (base*altura)/2;
}

function calcularPerimetroTriangulo(lado1,lado2,base){
    var valorLado1 = parseInt(document.getElementById("ladoTriangulo1").value);
    var valorLado2 = parseInt(document.getElementById("ladoTriangulo2").value);
    var valorBase = parseInt(document.getElementById("baseTriangulo").value);
    
    if(valorLado1 >0 && valorLado2 >0 && valorBase > 0){
        var perimetro = perimetroTriangulo(valorLado1,valorLado2,valorBase);
        alert(perimetro);
    }else{
        alert("Debe ingresar los valores para calcular");
    }

}
function calcularAreaTriangulo(base,altura){
    var altura = document.getElementById("alturaTriangulo").value;
    var base = document.getElementById("baseTriangulo").value;
    
    if(altura > 0 && base >0){
         var area = areaTriangulo(altura,base);
         alert(area);
    }else{
        alert("Debe ingresar datos para calcular");   
    }
}
//FUNCIONES CALCULO Circulo
function perimetroCirculo(radio){
    var diametro = radio *2;
    var perimetro = diametro * Math.PI;
    return perimetro;
}
function areaCirculo(radio){
    var pi = Math.PI;
    var area = (radio*radio)*pi;
    return area;
}
function calcularPerimetroCirculo(radio){
    var valorRadio = parseInt(document.getElementById("radioCirculo").value);
    
    if(valorRadio >0){
        var perimetro = perimetroCirculo(valorRadio);
        alert(perimetro);
    }else{
        alert("Debe ingresar el radio");   
    }

}
function calcularAreaCirculo(radio){
    var valorRadio = parseInt(document.getElementById("radioCirculo").value);
    
    if(valorRadio >0){
        var area = areaCirculo(valorRadio);
        alert(area);
    }else{
        alert("Debe ingresar el radio");   
    }
    
}
