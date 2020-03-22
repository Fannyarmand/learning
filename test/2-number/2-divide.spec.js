const should = require('should');
const { describe, it } = require('mocha');

const divide = require('../../lessons/2-number/2-divide');

describe('Divide', () => {
  it('should be a function', () => {
    should(divide).be.of.type("function", '"divide" must be a function');
  });

  it('should divide', () => {
    divide(0, 100).should.be.equal(0, '"divide(0, 100)" must return 0');
    divide(100, 2).should.be.equal(50, '"divide(100, 2)" must return 50');
    divide(100, -2).should.be.equal(-50, '"divide(100, -2)" must return -50');
    divide(42, 0).should.be.equal(null, '"divide(42, 0)" must return null');
  });
});
