const should = require('should');
const { describe, it } = require('mocha');

const isLeap = require('../../lessons/3-if-statement/7-is-leap');

describe('IsLeap', () => {
  it('should be a function', () => {
    should(isLeap).be.of.type('function', '"isLeap" must be a function');
  });

  it('should isLeap', () => {
    isLeap(2020).should.be.true('"isLeap(2020)" must return true');
    isLeap(2021).should.be.false('"isLeap(2021)" must return false');
    isLeap(1900).should.be.false('"isLeap(1900)" must return false');
    isLeap(2024).should.be.true('"isLeap(2024)" must return true');
    isLeap(1824).should.be.true('"isLeap(1824)" must return true');
    isLeap(1582).should.be.false('"isLeap(1582)" must return false');
    isLeap(1764).should.be.true('"isLeap(1764)" must return true');
  });
});
