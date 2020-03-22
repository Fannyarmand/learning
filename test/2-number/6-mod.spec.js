const should = require('should');
const { describe, it } = require('mocha');

const mod = require('../../lessons/2-number/6-mod');

describe('Mod', () => {
  it('should be a function', () => {
    should(mod).be.of.type("function", '"mod" must be a function');
  });

  it('should mod', () => {
    mod(5, 1).should.be.equal(0, '"mod(5, 1)" must return 0');
    mod(2, 2).should.be.equal(0, '"mod(2, 0)" must return 0');
    mod(3, 2).should.be.equal(1, '"mod(3, 2)" must return 1');
    mod(2, 3).should.be.equal(2, '"mod(2, 3)" must return 2');
    mod(10, 5).should.be.equal(0, '"mod(10, 5)" must return 0');
  });
});
