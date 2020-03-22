const should = require('should');
const { describe, it } = require('mocha');

const and = require('../../lessons/1-boolean/2-and');

describe('And', () => {
  it('should be a function', () => {
    should(and).be.of.type("function", '"and" must be a function');
  });

  it('should return true', () => {
    and(true, true).should.be.true('"and(true, true)" must return true');
  });

  it('should return false', () => {
    and(true, false).should.be.false('"and(true, false)" must return false');
    and(false, true).should.be.false('"and(false, true)" must return false');
    and(false, false).should.be.false('"and(false, false)" must return false');
  });
});
