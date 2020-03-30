const should = require('should');
const { describe, it } = require('mocha');

const addNumberInArray = require('../../lessons/4-while-statement/3-add-number-in-array');

describe('AddNumberInArray', () => {
  it('should be a function', () => {
    should(addNumberInArray).be.of.type('function', '"addNumberInArray" must be a function');
  });

  it('should addNumberInArray', () => {
    addNumberInArray([1]).should.be.equal(1);
    addNumberInArray([1,2,3]).should.be.equal(6);
    addNumberInArray([]).should.be.equal(0);
  });
});
