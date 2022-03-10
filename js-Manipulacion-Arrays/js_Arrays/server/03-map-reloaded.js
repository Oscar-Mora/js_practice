const orders = [
    {
        customerName:'Oscar Mora',
        total:100,
        delivered:false
    },
    {
        customerName:'Alejandra Mora',
        total:180,
        delivered:false
    },
    {
        customerName:'Gabriel Mora',
        total:200,
        delivered:false
    }
]
console.log('original',orders);
//creando un map para traer solo los totales de cada orden- eso permite Reloaded
const totales= orders.map(item=>item.total);
//trayendo los totales solamente
console.log(totales);
//Si quisieramos hacer una adicion al objeto original en un nuevo array, es importante usar 
//los ... para hacer solo referencia al objeto original y no modificarlo directamente
const result1 = orders.map(elementosOriginales=>{return {tax:19, ...elementosOriginales
};
});//Esto modifica los elementos en order-Array y agrega en la primer posición "tax:19," porque yo
//lo puse en la primer posición
console.log(result1);
console.log(orders);