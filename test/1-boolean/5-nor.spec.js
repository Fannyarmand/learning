const should = require('should');
const { describe, it } = require('mocha');

const nor = require('../../lessons/1-boolean/5-nor');

describe('Or', () => {
  it('should be a function', () => {
    should(nor).be.of.type("function", '"nor" must be a function');
  });

  it('should return true', () => {
    nor(false, false).should.be.true('"nor(false, false)" must return true');
  });

  it('should return false', () => {
    nor(true, false).should.be.false('"nor(true, false)" must return false');
    nor(false, true).should.be.false('"nor(false, true)" must return false');
    nor(true, true).should.be.false('"nor(true, true)" must return false');
  });
});
