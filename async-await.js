/// Usando promesas 

let productos = [
    {
        nombre: "Ordenador Gaminf",
        marca: "Asus",
        precio: 1300
    }, {
        nombre: "Tablet",
        marca: "Samsung",
        precio: 300
    }, {
        nombre: "Camara Reflex",
        marca: "Canon",
        precio: 650
    },
]

function conseguirProductos() {
    return new Promise((resolve, reject) => {
        console.log("Cargando Productos...");

        setTimeout(() => {
            resolve(productos)
        }, 3500);
    });
}

/** LLamando solo la funcion como si fuer Sincrona (TRADICIONAL) */
///EN teoria BIEN pero esta Mal
//conseguirProductos() // Solo muestra  Cargando Productos...

// Forma correcta de llamar funcion ASINCRONA
conseguirProductos().then(datos => {
    console.log("Consumo de promesa modo Tradicional");
    console.log(datos);
    window.alert("Consumo de pormesa Modo tradicional");
    window.alert(datos)
});


//**USANDO   ASINC AWAIT  en vez de Then */

///EN teoria BIEN pero esta Mal
/**
 * let mis_productos = await conseguirProductos()
 * console.log(mis_productos); 
*/


// Uso correcto
// va a esperar que conseguitProductos se resuelva y lo mostrara por consola.
async function getMisProductos() {
    let mis_productos = await conseguirProductos();
    console.log("Consumo promesa modo Async Await");
    console.log(mis_productos);
    ///
    window.alert("Consumo promesa modo Async Await");
    window.alert(mis_productos)
}


getMisProductos();







