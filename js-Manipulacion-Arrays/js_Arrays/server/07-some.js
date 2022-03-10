const numeros=[1,2,3,5,10];

let alguno=false;
for (let index=0; index<numeros.length; index++){//ciclo para recorrer
    const element = numeros[index];//elemeno que recorrera el sring numeros
    if (element % 2 === 0){ //valida si al menos un elemento es par
        alguno = true; //respuesta que queremos sea devuelta
        break; //para que rompa el for y mande la salida
    }
}
console.log('alguno',alguno);//debería ser true, porque el 2 y el 10 son par

//con el metodo some sería
const rspsta= numeros.some(item=>item%2 ===0);
console.log('respuesta',rspsta);
/////////////////OTRO EJEMPLO, AHORA CON OBJETOS
const orders=[
    {
        customerName: 'Julio',
        Total: 150,
        delivered: true
    },
    {
        customerName: 'Regina',
        Total: 250,
        delivered: true
    },
    {
        customerName: 'Mariel',
        Total: 100,
        delivered: true
    },
    {
        customerName: 'Emireth',
        Total: 150,
        delivered: true
    },
    {
        customerName: 'Danna',
        Total: 150,
        delivered: true
    }
];
//aqui estamos validando si hay alguna orden entregada
const order_delivered = orders.some(item=>item.delivered);
console.log(order_delivered);//salida debería ser true, pues las primeras ordenes fueron entregadas
///
///AHORA VAMOS A TRABAJAR CON FECHAS
//Usaremos una paquetería de npm que se utiliza cuando trabajamos con fechas y funciones $ npm i date-fns
const dates = [
    {
        startDate: new Date(2021, 1, 1,10),
        endDate:new Date(2021, 1, 1,11),
        title:'cita con mi jefa'
    },
    {
        startDate: new Date(2021, 1, 1,15),
        endDate:new Date(2021, 1, 1,15,30),
        title:'cita de trabajo'
    },
    {
        startDate: new Date(2021, 1, 1,20),
        endDate:new Date(2021, 1, 1,21),
        title:'Cena'
    },

];
//var nuevas citas ( New appointments)su valor será una cita que cruza sus fechas
const newAppointments={
    startDate: new Date(2021, 1, 1,20),
    endDate:new Date(2021, 1, 1,21),
    title:'Cena tíos'
};
const areIntervalsOverlapping = require ('date-fns/areIntervalsOverlapping');
const isOverlap = (newDate)=>{
    return dates.some(date =>{
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {sart:newDate.startDate, end:newDate.endDate}
        )
    })
};
console.log(isOverlap(newAppointments));