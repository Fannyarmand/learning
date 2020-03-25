const should = require('should');
const { describe, it } = require('mocha');

const whatIs = require('../../lessons/3-if-statement/9-what-is');

describe('WhatIs', () => {
  it('should be a function', () => {
    should(whatIs).be.of.type('function', '"whatIs" must be a function');
  });

  it('should whatIs', () => {
    whatIs('a').should.be.equal("alphabet");
    whatIs('1').should.be.equal("digit");
    whatIs('é').should.be.equal("special");
    whatIs(' ').should.be.equal("special");
  });
});
