const assert = require('chai').assert;
const expect = require('chai').expect;

const Iteration = require('../iteration.js');

describe('#Iteration.calcAdjacent', function() {
  it('should return 1 for (1,0) or (0,1)', function() {
    assert.equal(Iteration.calcAdjacent(1, 0), 1);
    assert.equal(Iteration.calcAdjacent(0, 1), 1);
  });

  it('should return 0 for (0,0) or (1,1)', function() {
    assert.equal(Iteration.calcAdjacent(0, 0), 0);
    assert.equal(Iteration.calcAdjacent(1, 1), 0);
  });
});

describe('#Iteration.iteration', function() {
  it('#should pass for 1 iteration', function() {
    const iterator = Iteration.iteration([0,1,0,1,0], 1);
    expect(iterator.next().value).to.eql([ 1, 0, 0, 0, 1 ]);
  });

  it('should expected array on each iteration * 5', function() {
    const iterator = Iteration.iteration([0,1,1,0,1], 5);
    expect(iterator.next().value).to.eql([ 1, 1, 1, 0, 0 ]);
    expect(iterator.next().value).to.eql([ 1, 0, 1, 1, 0 ]);
    expect(iterator.next().value).to.eql([ 0, 0, 1, 1, 1 ]);
    expect(iterator.next().value).to.eql([ 0, 1, 1, 0, 1 ]);
  });

  it('should not equal for 2nd iteration', function() {
    const iterator = Iteration.iteration([0,1,1,0,1], 5);
    expect(iterator.next().value).to.eql([ 1, 1, 1, 0, 0 ]);
    expect(iterator.next().value).to.not.eql([ 1, 1, 1, 1, 0 ]);
  });
});
