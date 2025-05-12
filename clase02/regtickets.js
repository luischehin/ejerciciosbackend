//! 1) crear una clase que permita llevar una gestion completa de usuarios que deseen acceder a dichos eventos
//! 2) Definir clase ticketManager, el cual tendrra un arreglo de eventos que iniciara vacio 
//! 3) la clase debe contar con una variable privada "precioBaseDeGanancia", la cual añadirá un costo adicional al precio de cada evento
//! 4) debe contar con el metodo "getEventos" el cual mostrará los eventos guardados 
//! 5)debe contar con el metodo"agregarEvento" el cual recibirá los siguientes parametros: nombre,lugar,precio(deberá agregarse un 0.15 del valor original),capacidad(50 por defecto),fecha(hoy por defecto)
//! el metodo deberá crear ademas el campoo id autoincrementable y el campo"participantes" que siempre iniciara con un arreglo vacio.
//! 6) Debe contar con un metodo "agregarUsuario" el cual recibirá: id del evento (debe existir,agregar validaciones) y id del usuario.
//! el metodo debe evaluar que el evento existar y que el usuario no haya estado registrado previamente (validacion de fecha y capacidad se evitará para no alargar el reto)
//! si todo esta en ondragend, debe agregar el id del usuario en el arreglo "participantes" de ese evento. 
//! 7) debe contar con un metodo "ponerEventoEnGira" el cual recibirá: id del evento, nueva localidad, nueva fecha. el metodo debe copuar el evento existente con una nueva localidad, nueva fecha, nuevo id y sus partidipantes vacios ( usar spread operator para el resto de las propiedades)



class ticketManager{
    #precioBaseDeGanancia = 0.15;
    
    constructor(){
        this.eventos = [];
    }

    getEventos(){
        return this.eventos;
    }

    agregarEvento(nombre, lugar, precio, capacidad =50, fecha = new Date().toLocaleDateString()){
        if (!nombre || !lugar || !precio){
            throw new Error( "nombre, lugar y precio son obligarotorios")
        }
        const evento ={
            id: this.eventos.length + 1, // se suma de 1 en 1
            nombre,
            lugar,
            precio: precio + (precio * this.#precioBaseDeGanancia), // precio con ganancia
            capacidad,
            fecha,
            participantes:[]
        };
        this.eventos.push(evento);
        return evento;
    };

    agregarUsuario(idEvento, idUsuario){
    //validar que el evento exista
    const evento =this.eventos.find(e => e.id === idEvento);
    if(!evento){
        throw new Error ("evento no encontrado");
    }
     //valido que el usuario no esté registrado
     if(evento.participantes.includes(idUsuario)){
        throw new Error (" el usuario ya está registrado");
     }
     //agrego un usuario
     evento.participantes.push(idUsuario);
     return `usuario ${idUsuario} añadido al evento${evento.nombre}`
    };

    //metodo ponerEventoEnGira
    ponerEventoEnGira(idEvento, nuevaLocalidad,nuevaFecha){
        const eventoOriginal = this.eventos.find (e =>e.id===idEvento);
        if(!eventoOriginal){
            throw new Error ("evento no encontrado");
        }

        const nuevoEvento = {
            ...eventoOriginal, // copia todas las propiedades
            id: this.eventos.length +1, // suma un nuevo id
            lugar: nuevaLocalidad,
            fecha: nuevaFecha,
            participantes: [],
        };
        this.eventos.push(nuevoEvento);
        return nuevoEvento;
    }
};

//ejemplo

const manager = new ticketManager();

//agregar evento
manager.agregarEvento("concierto de fran", "tucuman", 1000);
manager.agregarEvento("festival de la papa", "chaco", 10);

//agrefgar usuario
manager.agregarUsuario(1, "userfran");
manager.agregarUsuario(2,"nico");

// probar
const ponerEventoEnGira = manager.ponerEventoEnGira(1, "santiago de chile","10/10/10");
console.log(ponerEventoEnGira);

