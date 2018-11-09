const calcAdjacent = (r = 0, l = 0) => {
  return (r + l === 1) ? 1 : 0;
}

function* iteration(arr, count) {
  if (count > 0) {
    const tmp = arr.map((v, i) => {
      if (i === 0 || i === arr.length - 1) {
        return calcAdjacent(arr[i - 1] || arr[i + 1]);
      } else {
        return calcAdjacent(arr[i - 1], arr[i + 1]);
      }
    });

    yield tmp;
    yield * iteration(tmp, --count);
  }
}

module.exports = {
  calcAdjacent,
  iteration
}
