//Traer la info del #btnGuardar del form
const btnGuardar = document.querySelector("#btnGuardar")
btnGuardar.onclick=()=>{
const innombre = document.querySelector("#innombre").value
const indescripcion = document.querySelector("#indescripcion").value
const inurlimg = document.querySelector("#inurlimg").value
createAddCard(innombre,indescripcion,inurlimg)
}



function createAddCard(name,descripcion,urlimg){
// DIV PRINCIPAL Y CONTENEDORES
    const divCard = document.createElement('div')
    divCard.className ='restCard'

    const divRest = document.createElement('div')
    divRest.className ='nombre_descripcion'
    const divImg = document.createElement('div')
    divImg.className ='imagen'
// CONTENIDO 1ER DIV    
    const nombre = document.createElement('h3')
    nombre.textContent = name
    const desc = document.createElement('p')
    desc.textContent=descripcion
// CONTENIDO 2DO DIV
    const img = document.createElement('img')
    img.src=urlimg
// AGREGANDO CONTENIDOS AL DIV CARD   
    divRest.append(nombre,desc)
    divImg.append(img)
    divCard.append(divRest,divImg)    
    const main = document.querySelector('main')
    main.append(divCard)
}
createAddCard('Pujol','Pujol tiene varios años consolidándose como uno de los mejores restaurantes de la CDMX e incluso tiene varios años dentro de los 50 Mejores Restaurantes del Mundo','https://topadventure.com/__export/1602613170431/sites/laverdad/img/2020/10/13/pujol.jpg_536647235.jpg')

