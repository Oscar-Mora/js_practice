const products1 = [
new Producto("Manzanas", 40,50,1),
new Producto("Peras", 50,30,1),
new Producto("Uvas", 25,100,1),
new Producto("Mangos", 60,50,1),
new Producto("Duraznos", 80,40,1)
]

const products2 = [
    new Producto("Tenis Deportivo", 500,50,1),
    new Producto("Tenis Casual", 500,50,1),
    new Producto("Tenis Dama", 250,50,1),
    new Producto("Tenis Caballero", 600,50,1),
    new Producto("Tenis Niño", 600,50,1)
    ]
//Funcion que devuelve el arreglo de productos 1
    function getProducts(){
        return products1
    }
//Funcion que regresa el elemento que se encuentra en el indice que se le pase
    function getProductByIndex(i){
        return products1[i]
    }
//Funcion que borra el indice indicado dentro del arreglo productos 1
function deleteProduct(i){
    return products1.splice(i)
}
//funcion que actualiza un elemento en un arreglo
function updateProducto(i,nombre,precio,existencias,status){
    products1[i].nombre=nombre,
    products1[i].precio=precio,
    products1[i].existencias=existencias,
    products1[i].status=status
}
