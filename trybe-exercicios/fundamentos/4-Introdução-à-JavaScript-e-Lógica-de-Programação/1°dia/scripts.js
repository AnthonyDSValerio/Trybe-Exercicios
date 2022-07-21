const primeroLado = 60; 
const segundoLado = 80;
const terceiroLado = 40;

let resultado;

if (primeroLado + segundoLado + terceiroLado === 180) {
  resultado = true;
}
else if (primeroLado + segundoLado + terceiroLado !== 180) {
  resultado = false;
}
else {
  resultado = "erro";
}

console.log(resultado);