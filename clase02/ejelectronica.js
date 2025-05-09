const sucursales = {
    centro:{ monitor:2, mouse:15},
    sur:{monitor:3, notebook:5},
    oeste:{teclado:1, mousepack:3},
};

const productosUnicos =[];

Object.values(sucursales).forEach(sucursal=>{
    Object.keys(sucursal).forEach(producto=>{
        if(!productosUnicos.includes(producto)){
            productosUnicos.push(producto);
        }
    });
});

console.log("Productos Unicos:", productosUnicos );

let totalVendidos = 0;

Object.values(sucursales).forEach(sucursal => {
    Object.values(sucursal).forEach(cantidad=>{
        totalVendidos += cantidad
    });
});

console.log("total vendidos:", totalVendidos);