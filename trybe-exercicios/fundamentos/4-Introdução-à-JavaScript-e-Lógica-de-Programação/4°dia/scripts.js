// Parte I - Objetos e For/In
// Usando o objeto abaixo, faça os exercícios a seguir:

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. 
// Valor esperado no console: Bem-vinda, Margarida

// console.log('Bem-vinda', info['personagem']);

// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

// info['recorrente'] = 'Sim';
// console.log(info);

// 3 - Faça um for/in que mostre todas as chaves do objeto.

// for (let key in info) {
//   console.log(key);
// }

// 4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.

// for (let key in info) {
//   console.log(info[key]);
// }

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. 

// let info2 = {
//   personagem: 'Tio Patinhas',
//   origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//   nota: 'O último MacPatinhas',
//   recorrente: 'Sim',
// };

// for (let properties in info) {
//   if (
//     properties === 'recorrente' &&
//     info[properties] === 'Sim' &&
//     info2[properties] === 'Sim'
//   ) {
//     console.log('Ambos recorrentes');
//   } else {
//     console.log(info[properties] + ' e ' + info2[properties]);
//   }
// }

// Usando o objeto abaixo, faça os exercícios a seguir:

// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: 'O Pior Dia de Todos',
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
//   ],
// };

// 6 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

// console.log("O livro favorito de", leitor['nome'], leitor['sobrenome'], 'se chama "' + leitor['livrosFavoritos'][0]['titulo'] + '"');

// 7 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array.

// leitor['livrosFavoritos'].push({
//   titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//   autor: 'JK Rowling',
//   editora: 'Rocco',
// });

// 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

// console.log(leitor.nome, "tem", leitor.livrosFavoritos.length, 'livros favoritos');

// "Julia tem 2 livros favoritos"

// Parte II - Funções

// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// function verificaPalindrome(palavra){
//   for (let index in palavra){
//     if (palavra[index] != palavra[(palavra.length - 1) - index]) {
//       return false;
//     }
//   }
//   return true;
// }


// console.log(verificaPalindrome("omississimo"));

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// function indiceDoMaior(numeros){
//   let maiorNumero = 0;
//   for (let contador in numeros){
//     if (numeros[maiorNumero] < numeros[contador]){
//       maiorNumero = contador;
//     }
//   }
//   return maiorNumero;
// }

// console.log(indiceDoMaior([2, 4, 6, 7, 10, 0, -3]));

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// function indiceDoMenor(numeros){
//   let menorNumero = 0;
//   for (let contador in numeros){
//     if (numeros[menorNumero] > numeros[contador]){
//       menorNumero = contador;
//     }
//   }
//   return menorNumero;
// }

// console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3]));

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// function maiorNome(nomes){
//   let maior = nomes[0];
//   for (let index in nomes){
//     if (maior.length < nomes[index].length) {
//     maior = nomes[index];
//     }
//   }
//   return maior;
// }

// console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// function maisRepetido(numeros){
//   let contadorDeRepeticao = 0;
//   let maisRepeticoes = 0;
//   let indexMaisRepetido = 0;
//   for (let index in numeros){
//     let numeroVerificado = numeros[index]
//     for (let index2 in numeros){
//       if (numeroVerificado === numeros[index2]){
//         contadorDeRepeticao += 1;
//       }
//     }
//     if (contadorDeRepeticao > maisRepeticoes){
//       maisRepeticoes = contadorDeRepeticao;
//       indexMaisRepetido = index;
//     }
//     contadorDeRepeticao = 0;
//   }
//   return numeros[indexMaisRepetido];
// }

// console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

// function soma(numero){
//   let resultado = 0;
//   for (let index = 1; index <= numero; index += 1){
//     resultado += index;
//   }
//   return resultado;
// }

// console.log(soma(5));

// function verificaFimPalavra(palavra, fimPalavra) {
//   let inversoPalavra = palavra.split('').reverse().join('');
//   let inversoFimPalavra = fimPalavra.split('').reverse().join('');
//   let result;

//   for (let index = 0; index < inversoFimPalavra.length; index += 1) {
//     if (inversoPalavra[index] !== inversoFimPalavra[index]) {
//       result = false;
//       break;
//     } else {
//       result = true;
//     }
//   }
  
//   return result;
// }

// console.log(verificaFimPalavra('trybe', 'be'));
// console.log(verificaFimPalavra('joaofernando', 'fernan'));