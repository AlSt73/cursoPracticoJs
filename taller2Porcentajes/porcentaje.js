/*
const precio= 2000;
const descuento = 15;
const porcentajeConDescuento =  100-descuento;
const precioConDescuento = (precio * porcentajeConDescuento)/100;

var vista = {
    precioOriginal: precio,
    porcentajeDescuento: descuento,
    procentajeResultante: porcentajeConDescuento,
    precioFinal: precioConDescuento 
}
console.log(vista);
*/

function descuentoDePrecios(precio,descuento){
    var precioFinal = (precio*(100-descuento))/100;
    return precioFinal;

}

function calcularPrecio(){
    var price = parseInt(document.getElementById("price").value);
    //var discount = parseInt(document.getElementById("discount").value);
    var cupon= document.getElementById("cupon").value;
    var coupons = [{
        name: "vacaciones",
        discount: 25
    },
    {
        name: "invierno",
        discount: 15
    },
    {
        name: "vueltaClases",
        discount: 33
    }];
    
    var isCouponValid= function(coupon){
        return coupon.name === cupon;
    }

    const userCoupon = coupons.find(isCouponValid);
    if(!userCoupon){
        alert("El cupon no es valido");
    }else{
        var descuento = userCoupon.discount;
        var precioFinal = descuentoDePrecios(price,descuento);
        var resultado = `<h3>${descuento}%</h3>`;
        document.querySelector("#desc").innerHTML = `${resultado}`;
        document.querySelector("#pFinal").innerHTML = `$${precioFinal}`;
        document.querySelector("#pOriginal").innerHTML = `$${price}`;
    }

    
}


