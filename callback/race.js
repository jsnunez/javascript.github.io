
function asyncOperation(id,delay){
    return new Promise((resolve,reject) =>{
setTimeout(()=> {
    resolve(`operacion ${id} completado`)
}, delay)
reject()

    })
}

const promises =[
    asyncOperation(1,3000),

    asyncOperation(2,2000),

    asyncOperation(3,5000)
]

Promise.race(promises)
.then((res) => {
    console.log("La primera promesa en completarse:", res);
})
.catch((error) => {
    console.error("La primera promesa en ser rechazada:", error);
});
