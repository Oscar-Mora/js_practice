const listaObjetos = [
    {
        objectName:'Mesa',
        description:'es una mesa',
        precio:200,
        enInventario: true,
        Unidades:15

    },
    {
        objectName:'Silla',
        description:'es una mesa',
        precio:100,
        enInventario: true,
        Unidades:15
    },
    {
        objectName:'Tasa',
        description:'es una tasa',
        precio:28,
        enInventario: false,
        Unidades:0
    }
];
console.log(listaObjetos);
//PARA FILTRAR CON FOR:
const arrayFilter = []; //Creamos el array que contendra el resultado
for (let index=0;index<listaObjetos.length;index++){//hacemos el ciclo para recorrer el array
    const element = listaObjetos[index];//asiganmos la var al array base
    if (element.precio<=100){//para validar el dato que necesitamos
    arrayFilter.push(element);//agregando al array vacio, el resultado
}};
console.log('arrayFilter' , arrayFilter);

const aFilter =listaObjetos.filter(objetosCaros=> objetosCaros.precio>=100 && objetosCaros.enInventario)
console.log('Los objetos más caros en exisencia son: ', aFilter);
//Con filter se puede crear un search, en forma de funcion pasandole un query, 
//con nombre"query" en este ejemplo,que devuelve el result de sí incluye el query en la propiedad NAME
const search = (query) =>{
    return listaObjetos.filter(objeto=>objeto.objectName.includes(query))
}
console.log('la palabra buscada fue ',search('Tasa'));

//otro ejemplo de filter
const alumnos = [
    {
        nombreAlumno:'Gil Mora',
        nivel:'universidad',
        promedio:9
    },
    {
        nombreAlumno:'Nicolas Maduro',
        nivel:'secundaria',
        promedio:6
    },
    {
        nombreAlumno:'Eva García',
        nivel:'universidad',
        promedio:9
    },
    {
        nombreAlumno:'Gabriel Morales',
        nivel:'preparatoria',
        promedio:6
    },
    {
        nombreAlumno:'Alejandra Medrano',
        nivel:'universidad',
        promedio:6
    }

];
const aprobados = alumnos.filter(alAprov=> alAprov.promedio>=8);
console.log('aprobados',aprobados);
const search2 = (query) =>{
    return alumnos.filter(prom=>
        prom.nivel.includes(query)//includes solamente ayuda en el query cuando rabajamos con srings
    )
};
console.log(search2('universidad'));