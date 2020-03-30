const should = require('should');
const { describe, it } = require('mocha');

const addNumbersFrom0To1000 = require('../../lessons/4-while-statement/2-add-all-numbers-from-0-to-1000');

describe('addNumbersFrom0To1000', () => {
    it('should be a function', () => {
        should(addNumbersFrom0To1000).be.of.type('function', '"addNumbersFrom0To1000" must be a function');
    });

    it('should addNumbersFrom0To1000', () => {
        addNumbersFrom0To1000().should.be.equal(500500);
    });
});
