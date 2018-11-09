const assert = require('assert');
const Iteration = require('../iteration.js');

console.log(Iteration);

describe('Array iteration test', function() {
  it('calcAdjacent', function() {
    assert.equal(Iteration.calcAdjacent(1, 0), 1);
    assert.equal(Iteration.calcAdjacent(0, 0), 0);
    assert.equal(Iteration.calcAdjacent(1, 1), 0);
  });
});
