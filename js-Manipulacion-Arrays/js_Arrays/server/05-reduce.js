const totals = [1,2,3,4,5,3,3,9];
let sum = 0;
for (let index=0; index < totals.length; index++){
    const element = totals[index];
    sum=sum + element;
}
console.log('La suma de los totales es: ', sum)
//REDUCE funciona con:
// 1.--- 2 parametros(el acumulador y el item value que recorre los elements en el array),
//2.---La arrow function y 
//3.---El valor inicial del acumulador
const rta = totals.reduce((acumulador,element) => acumulador + element, 0);
//el acumulador en este caso hace la funcion de una suma de los numeros dentro del array
console.log(rta);
//AHORA Hagamos un objeto que nos devuelva cuantas veces se repite un numero dentro del array
const rta2=totals.reduce((acumulador,elemento) =>{
    if (!acumulador[elemento]){//aqui usamos una condicional para decir, "si el elemento no existe dentro del acumulador"
        acumulador[elemento]=1;//entonces inicializa ese elemento en 1, al haberlo encontrado y poder registra que existe
    }else{//SINO (osea si ya existe), entonces que le sume otra unidad, pues volvimos a encontrar ese elemento 
        acumulador[elemento] = acumulador[elemento]+1;//AQUI SE ORDENA SUMAR LA COINSIDENCIA DE ESE VALOR
    }return acumulador;
},{});//ES MUY IMPORANTE  INICIALIZAR EL ACUMULADOR COMO OBJETO EN ESTE TIPO DE SOLUCIONES
//al poner los corchetes al final de la arrow function significa que el resultado es un objeto, inicialmente vacio
console.log(rta2);