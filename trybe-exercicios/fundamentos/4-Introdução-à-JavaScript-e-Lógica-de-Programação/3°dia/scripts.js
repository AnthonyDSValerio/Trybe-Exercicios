//Exercicio 1 "Crie um algoritmo que retorne o fatorial de 10."

// let fatorial = 1;

// for (let index = 10; index >= 1; index = index - 1) {
//   fatorial = fatorial * index;
// }
// console.log(fatorial);

//Exercicio 2 "Desenvolva um algoritmo que é capaz de inverter uma palavra."

// let palavra = 'Trybe';
// let palavraInvertida = '';

// for (let index = palavra.length - 1; index >= 0; index = index - 1) {
//   palavraInvertida += palavra[index];
// }
// console.log(palavraInvertida);

//Exercicio 3 "Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra."

// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let maiorPalavra = array[0];
// let menorPalavra = array[0];

// for (let index = 0; index < array.length; index += 1) {
//   if (maiorPalavra.length < array[index].length) {
//     maiorPalavra = array[index];
//   }
//   if (menorPalavra.length > array[index].length) {
//     menorPalavra = array[index];
// }
// }
// console.log(maiorPalavra);
// console.log(menorPalavra);

//Exercicio 4 "Escreva um algoritmo que retorne o maior número primo entre 2 e 50."

// let maiorNumeroPrimo = 0;

// for (let numeros = 2; numeros <= 50; numeros += 1) {
//   let primo = true;
//   for (let divisores = 2; divisores < numeros; divisores += 1) {
//     if (numeros % divisores === 0) {
//       primo = false;
//     }
//   }
//   if (primo) {
//     maiorNumeroPrimo = numeros;
//   }
// }
// console.log(maiorNumeroPrimo);