const should = require('should');
const { describe, it } = require('mocha');

const hypotenuseLength = require('../../lessons/3-if-statement/12-hypotenuse-length');

describe('HypotenuseLength', () => {
  it('should be a function', () => {
    should(hypotenuseLength).be.of.type('function', '"hypotenuseLength" must be a function');
  });

  it('should hypotenuseLength', () => {
    hypotenuseLength(2,3).should.be.equal(Math.sqrt(13));
    hypotenuseLength(1,1).should.be.equal(Math.sqrt(2));
    hypotenuseLength(10,10).should.be.equal(Math.sqrt(200));
  });
});
