/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   let array2=array.shift();
   return array2;

}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   let array3=array.pop();
   return array3;
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:

   let array4=array.length;
   ;
   return array4;
}


function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   let resultado = [];
      for (let i = 0; i < array.length; i++) {
        let elemento = array[i];
        resultado.push(elemento + 1);
      }
    
      // Devolver el nuevo arreglo con los elementos incrementados.
      return resultado;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;

}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
  palabras.toString(); //aca la pase a String.
   return  palabras.join(' '); //aca separe el string con espacios.
}



function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   if(array.includes(elemento)){
      return true;
   }else{
      return false;
   }
}

function agregarNumeros(arrayOfNums) { //https://www.youtube.com/watch?v=kc87ToRBTkc
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var suma=0;//en inicio.
   for(let i=0;i<arrayOfNums.length;i++){
      suma=suma + arrayOfNums[i]//sobreescribimos suma. Suma  + el valor iterando
   }
   return suma; //es decir, suma es 0, y se le suma [1,2,3,4] primero 1, luego el 2, luego el 3, asi hasta que termine el bucle.
   
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var suma=0;
   for(let i=0;i<resultadosTest.length;i++){
      var suma=suma+resultadosTest[i];
      var promedio=suma/resultadosTest.length;
   }
   return promedio;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
  
   for(let i=0;i<arrayOfNums.length;i++){
      if(arrayOfNums[0]<arrayOfNums[i]){
         return arrayOfNums[i];
      }
     
      }
   }


function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if(arguments.length===0){
      return 0;
   } else if(arguments.length===1){
      return arguments[0];
   } else{
      let producto=1;
      for(let i=0;i<arguments.length;i++){
         producto*=arguments[i];
      }
      return producto;

   }
 
   
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let suma=[];
   for(let i=0;i<array.length;i++){
      if(array[i]>18){
         suma.push(array[i]);
      }
      
   }
   let suma2=suma.length; //va a afuera porque es el resultado del finalizar de contar en el bucle.

   return suma2;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   
   
   if(numeroDeDia===1){
      return "Es fin de semana";
   
   } else if(numeroDeDia===7){
      return "Es fin de semana";
   } else if(numeroDeDia>=2 && numeroDeDia<=6){
      return "Es dia laboral";
   };

}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:

   let numString = num.toString();
   let numSeparado = Array.from(numString).map(Number);
   
   if(numSeparado[0]===9){
      return true;
   }else{
      return false;
   }

}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   for(let i=0;i<array.length;i++){
      if(array[i]!==array[0]){
         return false;
      };
}
return true;   

}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   let array2 = [];
   let mesesEncontrados = 0;
 
   for (let i = 0; i < array.length; i++) {
     if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
       array2.push(array[i]);
       mesesEncontrados++;
     }
   }
 
   if (mesesEncontrados === 3) {
     return array2;
   } else {
     return "No se encontraron los meses pedidos";
   }
 }
 


function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let array=[0,1,2,3,4,5,6,7,8,9,10];
   let tablaSeis=[];
 for(let i=0;i<array.length;i++){
   let tabla=6*array[i];
   tablaSeis.push(tabla);
 } 
 return tablaSeis;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   let array2=[];
   for(let i=0;i<array.length;i++){
      if(array[i]>100){
      array2.push(array[i])
      }

      }
      return array2;
   }


/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   
   let newArray = [];

  for (let i = 0; i < 10; i++) { //i es hasta 10 nomás.
    num += 2; //num va sumando de a 2.
    newArray.push(num); //y se vasumando a el array nuevo el resultado.

    if (num === i) { //pero si num es igual a i osea a su iteracción.
      return "Se interrumpió la ejecución";
      break; //se interrumpe y corta.
    }
  }

  return newArray;//después se imprime.
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let newArray = [];

   for (let i = 0; i < 10; i++) { //i es hasta 10 nomás.
      if (i===5) { //pero si "i" es igual a 5 osea a su iteracción.
         continue; //se saltea.
       }
     num += 2; //num va sumando de a 2.
     newArray.push(num); //y se va sumando a el array nuevo el resultado.
  }
 
   return newArray;//después se imprime.
 }


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
