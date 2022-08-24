const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const arraysUnidos = () => arrays.reduce((acc, curr) => acc.concat(curr), []);

console.log(arraysUnidos());