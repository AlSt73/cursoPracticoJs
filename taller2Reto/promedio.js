const notas=[
    {
        nota: 6,
        valor: 2
    },
    {
        nota:5,
        valor: 2
    },
    {
        nota: 3,
        valor: 2
    },
    {
        nota:7,
        valor: 4
    }
];



function calcularPromedioPonderado(arreglo){
    const multiplicacionNotasValor=arreglo.map((elemento)=>{
       return elemento.nota*elemento.valor;
    });
    const totalSuma= multiplicacionNotasValor.reduce((i=0,elemento)=>{
        return i+elemento;
    });
    const valor= arreglo.map((elemento)=>{
        return elemento.valor;
    });
    const sumaValor = valor.reduce((i=0,elemento)=>{
        return i+elemento;
    });
    const divisionNotas= totalSuma/sumaValor;
    
    return divisionNotas;
}

