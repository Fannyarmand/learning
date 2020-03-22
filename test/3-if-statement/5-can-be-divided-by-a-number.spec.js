const should = require('should');
const { describe, it } = require('mocha');

const canBeDivided = require('../../lessons/3-if-statement/5-can-be-divided-by-a-number');

describe('CanBeDivided', () => {
  it('should be a function', () => {
    should(canBeDivided).be.of.type('function', '"canBeDivided" must be a function');
  });

  it('should canBeDivided', () => {
    canBeDivided(5, 5).should.be.equal(true, '"canBeDivided(5, 5)" must return true');
    canBeDivided(25, 5).should.be.equal(true, '"canBeDivided(25, 5)" must return true');
    canBeDivided(11, 11).should.be.equal(true, '"canBeDivided(11, 11)" must return true');
    canBeDivided(121, 11).should.be.equal(true, '"canBeDivided(121, 11)" must return true');
    canBeDivided(4, 11).should.be.equal(false, '"canBeDivided(4, 11)" must return false');
    canBeDivided(789, 12).should.be.equal(false, '"canBeDivided(789, 12)" must return false');
  });
});
