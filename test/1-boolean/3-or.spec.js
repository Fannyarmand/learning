const should = require('should');
const { describe, it } = require('mocha');

const or = require('../../lessons/1-boolean/3-or');

describe('Or', () => {
  it('should be a function', () => {
    should(or).be.of.type("function", '"or" must be a function');
  });

  it('should return false', () => {
    or(false, false).should.be.false('"or(false, false)" must return false');
  });

  it('should return true', () => {
    or(true, false).should.be.true('"or(true, false)" must return true');
    or(false, true).should.be.true('"or(false, true)" must return true');
    or(true, true).should.be.true('"or(true, true)" must return true');
  });
});
