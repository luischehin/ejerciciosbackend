// 1)Implementa una clase ProductManager que permita:

// 2)Gestionar productos con propiedades: id (autoincremental), nombre, categoría, precio, stock.

// 3)Añadir un impuesto del 10% al precio base (variable privada).

// 4)Validar que no se repita el nombre del producto.

// 5)Poder poner productos en oferta (copiándolos con un descuento).

// 6) Buscar productos por categoría.

class ProductManager {
    // variable priv para el impuesto
    #impuesto = 0.10;

    constructor(){
        this.productos = []
    }

    //1 añadir producto (con validacion de nombre único)
    agregarProducto(nombre, categoria, precioBase, stock){
        if (this.productos.some(p=>p.nombre === nombre)){
            throw new Error ("el producto ya existe");
        }
        const producto ={
            id: this.productos.length +1,
            nombre,
            categoria,
            precio: precioBase+ (precioBase * this.#impuesto), //precio + impuesto
            stock,
            enOferta: false
        };
        this.productos.push (producto);
        return producto;
    }
    //2 popner producto en oferta ( descuento del 20%)
    ponerEnOferta(idProducto, descuento=0.20){
        const productoOriginal = this.productos.find (p=>p.id===idProducto);
        if(!productoOriginal) throw new Error("producto no encontrado");

        const productoOferta = {
            ...productoOriginal,
            id:this.productos.length + 1,
            precio: productoOriginal.precio * (1 - descuento), // con esto se aplica el descuento
            enOferta: true
        };
        this.productos.push(productoOferta);
        return productoOferta;
    }

    //3 Busco por categoria
    buscarPorCategoria(categoria){
        return this.productos.filter(p=> p.categoria === categoria);
    }
};

const manager = new ProductManager();

// Añadir productos
manager.agregarProducto("Laptop", "Tecnología", 1000, 10);
manager.agregarProducto("Mouse", "Tecnología", 20, 50);

// Poner en oferta
manager.ponerEnOferta(1); // Descuento del 20% en Laptop

// Buscar
console.log(manager.buscarPorCategoria("Tecnología"));