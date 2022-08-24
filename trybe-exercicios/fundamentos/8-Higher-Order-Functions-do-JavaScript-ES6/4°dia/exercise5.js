const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, currWord) => 
  acc + currWord.split('').reduce((acumulator, currLetter) =>  {
    if (currLetter === 'a' || currLetter === 'A') return acumulator + 1;
    return acumulator;
  }, 0), 0);
}

console.log(containsA());