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
let id=1;
const getcliente = new Promise((resolve, reject) => {
    const cliente = clientes.find(c => c.id === id);
    if (cliente) {
    resolve(cliente);
        }
    else {
        reject("Cliente con el " + id + " no existe");    }

});

getcliente.then(res => {
    console.warn(`No hubo error en la promesa`);
    console.log(res);
}).catch(res=>{
    console.error(`ERROR en la promesa`);
    console.log(res);
})
id=101
const getProducto = new Promise((resolve, reject) => {
    const producto = productos.find(p => p.id === id);
    if (producto) {
    resolve(producto);
        }
    else {
        reject("Hubo un error en la operación");    }

});

getProducto.then(res => {
    console.warn(`No hubo error en la promesa`);
    console.log(res.precio);
}).catch(res=>{
    console.error(`ERROR n la promesa`);
    console.log(res);
})


let productoId=[101,102];

const calcularTotalFactura = new Promise((resolve, reject) => {
    let total = 0;
    productos.forEach(productoId => {
        getProducto(productoId, (producto) => {
            if (error) {
                reject("Hubo un error en la operación"); 
            } else {
                total += producto.precio;
                if (productos.indexOf(productoId) === productos.length - 1) {
                    // Último producto, llamar al callback con el total calculado
                    resolve(total);
                }
            }
        });
    });
    

});

calcularTotalFactura.then(res => {
    console.warn(`No hubo error en la promesa`);
    console.log(res);
}).catch(res=>{
    console.error(`ERROR en la promesa`);
    console.log(res);
})


