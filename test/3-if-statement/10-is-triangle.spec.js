const should = require('should');
const { describe, it } = require('mocha');

const isTriangle = require('../../lessons/3-if-statement/10-is-triangle');

describe('IsTriangle', () => {
  it('should be a function', () => {
    should(isTriangle).be.of.type('function', '"isTriangle" must be a function');
  });

  it('should isTriangle', () => {
    isTriangle(1,9,170).should.be.true();
    isTriangle(90,45,45).should.be.true();
    isTriangle(180,0,0).should.be.true();
    isTriangle(180,180,0).should.be.false();
    isTriangle(0,0,0).should.be.false();
  });
});
