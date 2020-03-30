const should = require('should');
const { describe, it } = require('mocha');

const reverseArray = require('../../lessons/4-while-statement/6-reverse-array');

describe('ReverseArray', () => {
  it('should be a function', () => {
    should(reverseArray).be.of.type('function', '"reverseArray" must be a function');
  });

  it('should reverseArray', () => {
    reverseArray([0]).should.be.deepEqual([0]);
    reverseArray([0,1,2,3]).should.be.deepEqual([3,2,1,0]);
    reverseArray(['a','b','c']).should.be.deepEqual(['c','b','a']);
  });
});
