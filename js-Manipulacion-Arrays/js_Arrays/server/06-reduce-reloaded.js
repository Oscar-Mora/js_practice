const nums = [1,2,3,3,1];
const reducReload = nums.reduce((acum,element)=>{
    if (!acum[element]){//valida si el element no se encuentra en el nums
        acum[element]=1;//Entonces inicializa en 1 e valor del element en el acum
    }else{//sino(osea si se encuentra el element ya guardado en acum)
        acum[element]=acum[element]+1;//le suma 1 al # de elementos del tipo que está validando
    }return acum//devuelve el valor del acumulador, inicializado como vacio en la siguiente linea
},{})// se inicializa acum con las {} en blanco.
console.log(reducReload);