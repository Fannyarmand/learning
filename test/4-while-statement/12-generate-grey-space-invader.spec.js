const should = require('should');
const { describe, it } = require('mocha');

const generateGreySpaceInvader = require('../../lessons/4-while-statement/12-generate-grey-space-invader');

describe('GenerateGreySpaceInvader', () => {
  it('should be a function', () => {
    should(generateGreySpaceInvader).be.of.type('function', '"generateGreySpaceInvader" must be a function');
  });

  it('should generateGreySpaceInvader big cube', () => {
    generateGreySpaceInvader().should.be.equal(
`░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░██░░░░░░░░░░██░░░░░░
░░░░░░░░██░░░░░░██░░░░░░░░
░░░░░░██████████████░░░░░░
░░░░████░░██████░░████░░░░
░░██████████████████████░░
░░██░░██████████████░░██░░
░░██░░██░░░░░░░░░░██░░██░░
░░░░░░░░████░░████░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░`
    );
  });
});
