// Datos simulados
const clientes = [
    {
        id: 1,
        nombre: "Juan",
        direccion: "Calle A, Ciudad"
    },
    {
        id: 2,
        nombre: "Maria",
        direccion: "Calle B, Ciudad"
    }
];

const productos = [
    {
        id: 101,
        nombre: "Producto 1",
        precio: 50
    },
    {
        id: 102,
        nombre: "Producto 2",
        precio: 75
    },
    {
        id: 103,
        nombre: "Producto 3",
        precio: 100
    }
];

const facturas = [
    {
        id: 1001,
        clienteId: 1,
        productos: [101, 102],
        total: 0
    },
    {
        id: 1002,
        clienteId: 2,
        productos: [103],
        total: 0
    }
];

// Función para obtener un cliente por su ID
function getCliente(id) {
    return new Promise((resolve, reject) => {
        const cliente = clientes.find(c => c.id === id);
        if (cliente) {
            setTimeout(() => {
                resolve(cliente);
            }, 2000)

        } else {
            reject("Cliente con el " + id + " no existe");
        }
    })
}
// Función para obtener un producto por su ID
function getProducto(id) {
    return new Promise((resolve, reject) => {
        const producto = productos.find(p => p.id === id);
        if (producto) {
            setTimeout(() => {
                resolve(producto);

            }, 2000)

        } else {
            reject("Producto con el " + id + " no existe");
        }
    })
}



function calcularTotalFactura(productos) {
    return new Promise((resolve, reject) => {
        let total = 0;
        productos.forEach(productoId => {
            getProducto(productoId)
                .then((response) => {
                    total += response.precio;
                    if (productos.indexOf(productoId) === productos.length - 1) {
                        // Último producto, llamar al callback con el total calculado
                        setTimeout(() => {
                            resolve(total);
                        }, 2000)
                    }
                })
                .catch((err) => console.log(err))
        })
    })
}


// getCliente(1)
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err))




// calcularTotalFactura([101, 102])
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err))


function obtenerInformacionFactura (facturaId) {
    return new Promise((resolve, reject) => {
        const factura = facturas.find(f => f.id === facturaId);
        if (factura) {
            getCliente(factura.clienteId)
            .then ((response)=>{
            console.log(response);
            
            calcularTotalFactura(factura.productos)
            .then((response)=> console.log(response))} )
            
            setTimeout(() => {
           

            }, 2000)

        } else {
            reject("Producto con el " + id + " no existe");
        }
    })
}const facturaId = 1001;

obtenerInformacionFactura(facturaId)