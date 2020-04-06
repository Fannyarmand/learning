require('should');

const { describe, it } = require('mocha');
const { fake } = require('sinon');

const stdout = require('../../lessons/5-pattern/1-console-writer');
const { red, grey, ansiColorCode, ansiColor, yellow } = require('../../lessons/5-pattern/1-console-writer');

describe("Console Writer", () => {
  describe("AnsiColorCode", () => {
    it('should be an object', () => {
      ansiColorCode.should.be.of.type("object");
    });

    it('should have default code', () => {
      ansiColorCode.default.should.be.equal("\u001b[0m");
    });

    it('should have yellow code', () => {
      ansiColorCode.yellow.should.be.equal("\u001b[33m")
    });

    it('should have red code', () => {
      ansiColorCode.red.should.be.equal("\u001b[31m")
    });

    it('should have grey code', () => {
      ansiColorCode.red.should.be.equal("\u001b[30;1m")
    });
  });

  describe('AnsiColor', () => {
    it('should handle default', () => {
      ansiColor("foo").should.be.equal(`${ansiColorCode.default}foo${ansiColorCode.default}`);
    });

    it('should handle color', () => {
      ansiColor("foo", ansiColorCode.red).should.be.equal(`${ansiColorCode.red}foo${ansiColorCode.default}`);
    });
  });

  describe('Grey', () => {
    it('should return a grey colored string', () => {
      grey("foo").should.be.equal(`${ansiColorCode.grey}foo${ansiColorCode.default}`);
    });
  });

  describe('Red', () => {
    it('should return a red colored string', () => {
      red("foo").should.be.equal(`${ansiColorCode.red}foo${ansiColorCode.default}`);
    });
  });

  describe('Yellow', () => {
    it('should return a yellow colored string', () => {
      yellow("foo").should.be.equal(`${ansiColorCode.yellow}foo${ansiColorCode.default}`);
    });
  });

  describe('Stdout', () => {
    it('should write to stdout', () => {
      process.stdout.write = fake();

      stdout("foo");

      process.stdout.write.calledOnce.should.be.true();
    })
  })
});
