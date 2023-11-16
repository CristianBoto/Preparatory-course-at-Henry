/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arreglo=Object.entries(objeto);
console.log(objeto);
return arreglo;
}


function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var objeto={};

   for(let i=0;i<string.length;i++){
      if(!objeto[string[i]]){//Si no existe dentro de mi objeto vacío  esa letra, la agregamos.
     
      objeto[string[i]]=0;//los corchetes del string, es para agregar propiedad a un objeto. 

   }
   objeto[string[i]]++
   
}
var ordenarClaves=Object.keys(objeto).sort(); //Toma las claves y las ordena, es un array.
var objetoOrdenado={};
for(var i=0;i<ordenarClaves.length;i++){
   objetoOrdenado[ordenarClaves[i]]=objeto[ordenarClaves[i]];

}
return objetoOrdenado;

}

   function capToFront(string) {
      // Recibes un string con algunas letras en mayúscula y otras en minúscula.
      // Debes enviar todas las letras en mayúscula al comienzo del string.
      // Retornar el string.
      // [EJEMPLO]: soyHENRY ---> HENRYsoy
      // Tu código:
         let upperCaseString = ''; //Primero ponemos las mayúsculas.
         let lowerCaseString = ''; //Luego las minúsculas.
         for (let i = 0; i < string.length; i++) {
             if (string[i] === string[i].toUpperCase()) {
                 upperCaseString += string[i];
             } else {
                 lowerCaseString += string[i];
             }
         }
         return upperCaseString + lowerCaseString; //Unimos, primero van las mayúsculas luego las minúsculas.
     }

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var palabras = frase.split(" ");
   var resultado = "";
   for (var i = 0; i < palabras.length; i++) {
       var palabraRevertida = palabras[i].split("").reverse().join(""); //Split=divide en letras individuales, "reverse"=invierte el orden si estan separados y "join" los junta.
       resultado += palabraRevertida + " ";
   }
   return resultado.trim();//
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let numStr = numero.toString();
   let reversedStr = numStr.split('').reverse().join('');
   if (numStr === reversedStr) {
       return "Es capicua";
   } else {
       return "No es capicua";
   }
}
  


function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let string2 = "";
   for(let i = 0; i < string.length; i++){
      if(string[i] !== "a" && string[i] !== "b" && string[i] !== "c"){
         string2 += string[i];
      }
   }
   return string2;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings.sort((a, b) => a.length - b.length); //Como se usa "sort()", podes comparar "a" y "b" en longitud.
   return arrayOfStrings;

}


function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
       let intersection = [];
    for (let i = 0; i < array1.length; i++) { //este se fija en un array, osea itera sobre uno.
        for (let j = 0; j < array2.length; j++) {//este itera sobre el otro.
            if (array1[i] === array2[j] && !intersection.includes(array1[i])) { //Si es igual la iteración  a la otra se agrega abajo, && también si no estaba agregado anteriormente.
                intersection.push(array1[i]);
            }
        }
    }
    return intersection;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
