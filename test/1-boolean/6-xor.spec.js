const should = require('should');
const { describe, it } = require('mocha');

const xor = require('../../lessons/1-boolean/6-xor');

describe('Xor', () => {
  it('should be a function', () => {
    should(xor).be.of.type("function", '"xor" must be a function');
  });

  it('should return false', () => {
    xor(false, false).should.be.false('"xor(false, false)" must return false');
    xor(true, true).should.be.false('"xor(true, true)" must return false');
  });

  it('should return true', () => {
    xor(true, false).should.be.true('"xor(true, false)" must return true');
    xor(false, true).should.be.true('"xor(false, true)" must return true');
  });
});
