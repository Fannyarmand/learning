const should = require('should');
const { describe, it } = require('mocha');

const isArrayOfString = require('../../lessons/4-while-statement/3-is-array-of-string');

describe('IsArrayOfString', () => {
  it('should be a function', () => {
    should(isArrayOfString).be.of.type('function', '"isArrayOfString" must be a function');
  });

  it('should isArrayOfString', () => {
    isArrayOfString(["a"]).should.be.true();
    isArrayOfString(["acme","bar","foo"]).should.be.true();
    isArrayOfString([1]).should.be.false();
    isArrayOfString([true, false, true]).should.be.false();
  });
});
