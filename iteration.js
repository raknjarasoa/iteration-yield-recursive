const args = process.argv.slice(2);
const input = args[0].split('').map(v => parseInt(v, 10));
let nbIteration = parseInt(args[1], 10);
  
if (input.length !== nbIteration) {
  // TODO check if it is defined or not? iArray? iNaN?
  throw Error('Nombre itération ne correspond pas');
}

const calcAdjacent = (r = 0, l = 0) => {
  return (r + l === 1) ? 1 : 0;
}

const iteration = (arr) => {
  while (nbIteration > 0) {
    const tmp = arr.map((v, i) => {
      if (i === 0 || i === arr.length - 1) {
        return calcAdjacent(arr[i - 1] || arr[i + 1]);
      } else {
        return calcAdjacent(arr[i - 1], arr[i + 1]);
      }
    });
    console.log(tmp);

    nbIteration--;
    iteration(tmp);
  }
}

iteration(input);

module.exports = {
  calcAdjacent,
  iteration
}
