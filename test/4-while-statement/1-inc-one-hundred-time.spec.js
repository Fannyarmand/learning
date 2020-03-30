const should = require('should');
const { describe, it } = require('mocha');

const incOneHundredTime = require('../../lessons/4-while-statement/1-inc-one-hundred-time');

describe('incOneHundredTime', () => {
    it('should be a function', () => {
        should(incOneHundredTime).be.of.type('function', '"incOneHundredTime" must be a function');
    });

    it('should incOneHundredTime', () => {
        incOneHundredTime().should.be.equal(100);
    });
});
