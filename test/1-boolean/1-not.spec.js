const should = require('should');
const { describe, it } = require('mocha');

const not = require('../../lessons/1-boolean/1-not');

describe('Not', () => {
  it('should be a function', () => {
    should(not).be.of.type("function", '"not" must be a function');
  });

  it('should return false', () => {
    not(true).should.be.false('"not(true)" must return false');
  });

  it('should return true', () => {
    not(false).should.be.true('"not(false)" must return true');
  });
});
