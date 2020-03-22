const should = require('should');
const { describe, it } = require('mocha');

const max = require('../../lessons/3-if-statement/2-max-between-three');

describe('Max', () => {
  it('should be a function', () => {
    should(max).be.of.type("function", '"max" must be a function');
  });

  it('should max', () => {
    max(0, 0, 0).should.be.equal(0, '"add(0, 0, 0)" must return 0');
    max(42, 0, 0).should.be.equal(42, '"add(42, 0, 0)" must return 42');
    max(0, 100, 0).should.be.equal(100, '"add(0, 100, 0)" must return 100');
    max(1, 2, 3).should.be.equal(3, '"add(1, 2, 3)" must return 3');
  });
});
