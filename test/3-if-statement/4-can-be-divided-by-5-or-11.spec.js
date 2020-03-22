const should = require('should');
const { describe, it } = require('mocha');

const canBeDivided = require('../../lessons/3-if-statement/4-can-be-divided-by-5-or-11');

describe('CanBeDivided', () => {
  it('should be a function', () => {
    should(canBeDivided).be.of.type('function', '"canBeDivided" must be a function');
  });

  it('should canBeDivided', () => {
    canBeDivided(5).should.be.equal('"canBeDivided(5)" must return true');
    canBeDivided(25).should.be.equal('"canBeDivided(25)" must return true');
    canBeDivided(11).should.be.equal('"canBeDivided(11)" must return true');
    canBeDivided(121).should.be.equal('"canBeDivided(121)" must return true');
    canBeDivided(4).should.be.equal('"canBeDivided(4)" must return false');
    canBeDivided(789).should.be.equal('"canBeDivided(789)" must return false');
  });
});
