const should = require('should');
const { describe, it } = require('mocha');

const countElement = require('../../lessons/4-while-statement/5-count-element-in-array');

describe('CountElement', () => {
  it('should be a function', () => {
    should(countElement).be.of.type('function', '"countElement" must be a function');
  });

  it('should countElement', () => {
    countElement(['a']).should.be.equal(1);
    countElement(['acme', 'bar', 'foo']).should.be.equal(3);
    countElement(['acme', true, 1, null]).should.be.equal(4);
    countElement([]).should.be.equal(0);
  });
});
