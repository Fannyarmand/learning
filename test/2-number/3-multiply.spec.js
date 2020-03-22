const should = require('should');
const { describe, it } = require('mocha');

const multiply = require('../../lessons/2-number/3-multiply');

describe('Multiply', () => {
  it('should be a function', () => {
    should(multiply).be.of.type("function", '"multiply" must be a function');
  });

  it('should multiply', () => {
    multiply(0, 0).should.be.equal(0, '"multiply(0, 0)" must return 0');
    multiply(0, 100).should.be.equal(0, '"multiply(0, 100)" must return 0');
    multiply(42, 0).should.be.equal(0, '"multiply(42, 0)" must return 0');
    multiply(100, 42).should.be.equal(4200, '"multiply(100, 42)" must return 4200');
    multiply(100, -42).should.be.equal(-4200, '"multiply(100, -42)" must return -4200');
  });
});
