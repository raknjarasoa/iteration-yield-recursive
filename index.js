const Test = require('./iteration');

const args = process.argv.slice(2);
const input = args[0].split('').map(v => parseInt(v, 10));
let nbIteration = parseInt(args[1], 10);

if (input && !Array.isArray(input)) {
  throw Error('Un array doit être fourni en parametre');
}

if (nbIteration && isNaN(nbIteration)) {
  throw Error('Nombre itération doit être un entier non null');
}

const iterator = Test.iteration(input, nbIteration);

for (let i = 0; i< nbIteration; i++) {
  console.log(iterator.next().value);
}
