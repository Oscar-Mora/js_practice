//¿Cómo usar ForEach?
//forma corta y eficiente
const letters=['a','b','c','d'];
letters.forEach(element =>console.log('forEach',element));
//lo que es igual a 
for (let index = 0; index< letters.length;index ++){
    const element = letters[index];
console.log('for',element)
}