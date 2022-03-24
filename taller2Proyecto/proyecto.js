function interesSimple(capital,tiempo,interes){
    const interesConvertido = interes/100;
    const interesPagado = capital*interesConvertido*tiempo;
    //const ganancia = capital +interesPagado;
    return parseInt(interesPagado);
}
function interesCompuesto(capital,tiempo,interes){
    var capitalInicial = (interes/100)/12;
    const capitalFinal= capital*Math.pow((1+capitalInicial),tiempo);
    return capitalFinal;
}

function calcularInteres(capital,tiempo,interes){
    const capitalInput = parseInt(document.getElementById("capital").value);
    const tiempoInput = parseInt(document.getElementById("tiempo").value);
    const interesInput = parseFloat(document.getElementById("interes").value);
    if(isNaN(capitalInput) || isNaN(interesInput)|| isNaN(tiempoInput)){
        alert("error!");
    }else{
        const iSimple = interesSimple(capitalInput,tiempoInput,interesInput);
        const iCompuesto = interesCompuesto(capitalInput,tiempoInput,interesInput);
        const iCompuesto2= parseInt(iCompuesto);
        document.querySelector("#iSimple").innerHTML = `<span>$ ${iSimple}</span`;
        document.querySelector("#iCompuesto").innerHTML = `<span>$ ${iCompuesto2}</span`;
    }

}