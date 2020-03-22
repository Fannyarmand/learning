const should = require('should');
const { describe, it } = require('mocha');

const power = require('../../lessons/2-number/4-power');

describe('Power', () => {
  it('should be a function', () => {
    should(power).be.of.type("function", '"power" must be a function');
  });

  it('should power', () => {
    power(0, 0).should.be.equal(1, '"power(0, 0)" must return 1');
    power(0, 100).should.be.equal(0, '"power(0, 100)" must return 0');
    power(10, 2).should.be.equal(100, '"power(10, 2)" must return 100');
    power(10, -2).should.be.equal(0.01, '"power(10, -2)" must return 0.01');
  });
});
