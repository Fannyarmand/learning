const should = require('should');
const { describe, it } = require('mocha');

const foo = require('../../lessons/0-sample/foo');

describe('Foo', () => {
  it('should be a function', () => {
    should(foo).be.of.type("function", '"foo" must be a function');
  });

  it('should return true', () => {
    foo(true, true).should.be.true('"and(true, true)" must return true');
  });
});
