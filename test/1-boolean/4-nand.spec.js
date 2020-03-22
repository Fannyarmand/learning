const should = require('should');
const { describe, it } = require('mocha');

const nand = require('../../lessons/1-boolean/4-nand');

describe('Nand', () => {
  it('should be a function', () => {
    should(nand).be.of.type("function", '"nand" must be a function');
  });

  it('should return false', () => {
    nand(true, true).should.be.false('"nand(true, true)" must return false');
  });

  it('should return true', () => {
    nand(true, false).should.be.true('"nand(true, false)" must return true');
    nand(false, true).should.be.true('"nand(false, true)" must return true');
    nand(false, false).should.be.true('"nand(false, false)" must return true');
  });
});
