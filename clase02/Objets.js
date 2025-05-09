//! 1) Realizar una lista nueva ( array) que contenga todos los tipos de productos ( no cantidades ), CONSEJO: utilizar Object.keys y array.includes. mostrar el array por consola
//! 2) posteriormente, obtener el total de productos vendidos por todos los objetos ( utilizar Object.values)


const ventas = {
    lunes: {arroz:2, pan:2, leche:5},
    martes:{pan:1, lechuga:3, arandanos:3},
    miercoles: {yerba:4, manzana:3, banana: 5},
    jueves: {fideos:2, pan:3, leche:1},
    viernes: {lechuga:3, yerba:1, banana:1},
};

const listaUnica =[];


Object.values(ventas).forEach(dia => {
        Object.keys(dia).forEach(producto=>{
            if(!listaUnica.includes(producto)){
                listaUnica.push(producto);
            }
        })
    });

console.log("lista uncia de productos", listaUnica);

let totalProductos = 0;

Object.values(ventas).forEach(dia=>{
    Object.values(dia).forEach(cantidad =>{
        totalProductos+= cantidad
    });
});

console.log("total de productos vendidos", totalProductos);

