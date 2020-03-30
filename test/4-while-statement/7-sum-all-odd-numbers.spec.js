const should = require('should');
const { describe, it } = require('mocha');

const sumAllOddNumbers = require('../../lessons/4-while-statement/7-sum-all-odd-numbers');

describe('SumAllOddNumbers', () => {
  it('should be a function', () => {
    should(sumAllOddNumbers).be.of.type('function', '"sumAllOddNumbers" must be a function');
  });

  it('should sumAllOddNumbers', () => {
    sumAllOddNumbers(0).should.be.equal(0);
    sumAllOddNumbers(1000).should.be.equal(250500);
    sumAllOddNumbers(100000).should.be.equal(2500050000);
  });
});
