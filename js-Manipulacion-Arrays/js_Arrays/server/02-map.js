const letters=["a","b","c"];

//la manera más corta de crear un nuevo array con base en otro es de la siguiente forma:
const newArray=letters.map(letra=>letra+' ++')
//.map() es INMUTABLE por lo tanto no modifica el array original, sino que crea uno nuevo con la “transformación” aplicada.
//>>>>>>>>[[[DESCOMENTAR LAS SIG. 7 LINEAS PARA VER EL METODO A TRAVES DEL FOR]]]<<<<<<<<<DESCOMENTAR CTRL+K y +U     
// //Se crea un nuevo array pero en blanco,  ya que lo vamos a llenar con base en el letters array
// const newArray=[];
// //se crea un ciclo for para iterar por los elementos del array 
// for (let index=0; index < letters.length; index++){
// const element = letters[index];
// newArray.push(element +'++') 
// }
console.log('original', letters);
console.log('new',newArray);

const nums=[1,2,3,4,5];
const newArray2=[];
for (let index=0; index<nums.length; index++){
//inicializamos una variable para recorrer el array base por elemento
    const num= nums[index];
    newArray2.push(num+' ++');
}
const newArray3=nums.map(item=>item+'++');
console.log('new3',newArray3);
console.log('original',nums);
console.log('new',newArray2)
console.log('original',nums)