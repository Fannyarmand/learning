const should = require('should');
const { describe, it } = require('mocha');

const sign = require('../../lessons/3-if-statement/3-positive-negative-zero');

describe('Sign', () => {
  it('should be a function', () => {
    should(sign).be.of.type("function", '"sign" must be a function');
  });

  it('should sign', () => {
    sign(0).should.be.equal('zero', '"sign(0)" must return "zero"');
    sign(42).should.be.equal('positive', '"sign(42)" must return "positive"');
    sign(-42).should.be.equal('negative', '"sign(-42)" must return "negative"');
  });
});
