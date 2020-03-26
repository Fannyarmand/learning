const should = require('should');
const { describe, it } = require('mocha');

const whichTriangle = require('../../lessons/3-if-statement/11-which-triangle');

describe('WhichTriangle', () => {
  it('should be a function', () => {
    should(whichTriangle).be.of.type('function', '"whichTriangle" must be a function');
  });

  it('should whichTriangle', () => {
    whichTriangle(60,60,60).should.be.equal("equilateral");
    whichTriangle(90,45,45).should.be.equal("isosceles");
    whichTriangle(20,20,140).should.be.equal("isosceles");
    whichTriangle(30,120,30).should.be.equal("isosceles");
    whichTriangle(10,20,150).should.be.equal("basic");
  });

  it('should throw if not triangle', () => {
    should(() => whichTriangle(0,0,0)).throw();
  });
});
