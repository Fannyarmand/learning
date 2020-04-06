const should = require('should');
const { describe, it } = require('mocha');

const generateCube = require('../../lessons/4-while-statement/10-generate-cube');

describe('GenerateCube', () => {
  it('should be a function', () => {
    should(generateCube).be.of.type('function', '"generateCube" must be a function');
  });

  it('should throw if not valid', () => {
    should(() => generateCube(-1)).throw();
    should(() => generateCube(100)).throw();
    should(() => generateCube(21)).throw();
  });

  it('should generateCube small cube', () => {
    generateCube(0).should.be.equal("+");
    generateCube(1).should.be.equal("+");
    generateCube(0,true).should.be.equal("+");
    generateCube(1,true).should.be.equal("+");
  });

  it('should generateCube big cube', () => {
    generateCube(8).should.be.equal(
`+ + + + + + + +
+             +
+             +
+             +
+             +
+             +
+             +
+ + + + + + + +`
    );
  });

  it('should generateCube filled', () => {
    generateCube(4, true).should.be.equal(
`+ + + +
+ o o +
+ o o +
+ + + +`
    );
  });

});
