const should = require('should');
const { describe, it } = require('mocha');

const sub = require('../../lessons/2-number/5-sub');

describe('Sub', () => {
  it('should be a function', () => {
    should(sub).be.of.type("function", '"sub" must be a function');
  });

  it('should sub', () => {
    sub(0, 0).should.be.equal(0, '"sub(0, 0)" must return 0');
    sub(0, 100).should.be.equal(-100, '"sub(0, 100)" must return -100');
    sub(42, 0).should.be.equal(42, '"sub(42, 0)" must return 42');
    sub(100, 42).should.be.equal(58, '"sub(100, 42)" must return 58');
    sub(100, -42).should.be.equal(142, '"sub(100, -42)" must return 142');
  });
});
