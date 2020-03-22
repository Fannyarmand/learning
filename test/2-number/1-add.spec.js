const should = require('should');
const { describe, it } = require('mocha');

const add = require('../../lessons/2-number/1-add');

describe('Add', () => {
  it('should be a function', () => {
    should(add).be.of.type("function", '"add" must be a function');
  });

  it('should add', () => {
    add(0, 0).should.be.equal(0, '"add(0, 0)" must return 0');
    add(0, 100).should.be.equal(100, '"add(0, 100)" must return 100');
    add(42, 0).should.be.equal(42, '"add(42, 0)" must return 42');
    add(100, 42).should.be.equal(142, '"add(100, 42)" must return 142');
    add(100, -42).should.be.equal(58, '"add(100, -42)" must return 58');
  });
});
