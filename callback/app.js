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

const getCliente = (id, callback) => {
    const cliente = clientes.find(x => x.id === id)?.nombre;
    if (cliente) {
        callback(null, cliente)
    } else {
        callback("cliente con el " + id + " no existe");
    }
}
const getProducto = (id, callback) => {
    const product = productos.find(s => s.id === id)?.nombre;

    if (product) {
        callback(null, product)
    } else {
        callback("producto con el " + id + " no existe");
    }
}

const calcularTotalFactura = (produc, callback) => {
    let n = produc.length;
    let total = 0;

    for (var i = 0; i < n; i++) {

        var product = productos.find(z => z.id === produc[i])?.nombre;
        const precio = productos.find(z => z.id === produc[i])?.precio;

        total = total + precio
    }

    if (product) {
        callback(null, total)
    } else {
        callback("producto con el " + id + " no existe");
    }

}

const obtenerInformacionFactura = (facturaId, callback) => {


    const clientes = facturas.find(y => y.id === facturaId)?.clienteId;
    const prod = facturas.find(y => y.id === facturaId)?.productos;

    getCliente(clientes, (err, cli) => {
        if (err) {
            console.log("ERROR");
            return console.log(err);
        }

        console.log("El cliente es : " + cli);
        var n = prod.length;
        for (let i = 0; i < n; i++) {
            getProducto(prod[i], (err, pro) => {
                if (err) {
                    console.log("ERROR");
                    return console.log(err);
                }
    
                console.log("El producto es : " + pro);
    
            })
        }
        calcularTotalFactura(prod, (err, pro) => {
            if (err) {
                console.log("ERROR");
                return console.log(err);
            }
        
            console.log("El total es : " + pro);
        
        })
      
    })
   

}


/*


let id = 1;
getCliente(id, (err, cli) => {
    if (err) {
        console.log("ERROR");
        return console.log(err);
    }

    console.log("El cliente es : " + cli);

})

let idp = 101;
getProducto(idp, (err, pro) => {
    if (err) {
        console.log("ERROR");
        return console.log(err);
    }

    console.log("El producto es : " + pro);

})

let prod = [101, 102];

calcularTotalFactura(prod, (err, pro) => {
    if (err) {
        console.log("ERROR");
        return console.log(err);
    }

    console.log("El total es : " + pro);

})
*/
obtenerInformacionFactura(1002, (err, pro) => {
    if (err) {
        console.log("ERROR");
        return console.log(err);
    }

    console.log("El total es : " + pro);

})