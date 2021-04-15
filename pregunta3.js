// Dado un array de numeros enteros, retornar el 3er mayor
// Por ejemplo en: [4,3,4,5,1] el tercer mayor es 3
// si la longitud del array es < 3 se debe retornar undefined

const greater3 = nums => {
    let resultado;
    if (nums.lencgth<3) {
        resultado=undefined;
    } 
    else {
        let arrayOrdenado=nums.sort((a,b)=>a-b);
        let posicion= arrayOrdenado[arrayOrdenado.length-1];
        let cont=0;
          while (cont<2 || posicion>0){
            if (arrayOrdenado[posicion-1] != arrayOrdenado[posicion]){
                cont++;
            }
            posicion--;  
          }
            if (cont==2){
                resultado=arrayOrdenado[posicion];
            }
            else {
                resultado=undefined;
            }
    console.log(cont);
    }
    
}



// TESTs no modificar
console.log(greater3([4,3,4,5,1]) === 3);
console.log(greater3([4,3,4,5,1]));
console.log(greater3([3,4]) === undefined);
console.log(greater3([4,4,4]) === undefined);
console.log(greater3([1,1,2,5]) === 1);