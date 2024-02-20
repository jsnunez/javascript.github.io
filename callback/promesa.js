let exito=10

const miPromesa = new Promise((resolve, reject) => {
    if (exito % 2 ==0) {
        console.log("Esperando...");
        setTimeout(() => {
            resolve('Este valor es válido porque es par');
        }, 2000);
      } else {
        reject("Hubo un error en la operación, el numero es impar");
      }
});

miPromesa.then(par => {
    console.warn(`No hubo error en la promesa, ES PAR`);
    console.log(par);
}).catch(par=>{
    console.error(`ERROR n la promesa, ES IMPAR`);
    console.log(par);
})