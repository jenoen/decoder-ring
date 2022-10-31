// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("Jen's caesar() ENCODE tests", () => {
  describe("testing shift value if it's correct", () => {
    it("should return false if the shift amount is 0", () => {
      const message = "jen ostrich message";
      const shift = 0;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
    it("should return false if the shift amount is >25", () => {
      const message = "jen ostrich message";
      const shift = 30;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
    it("should return false if the shift amount is <25", () => {
      const message = "jen ostrich message";
      const shift = -26;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
  });

  describe("testing if input properly encoded", () => {
    it("should return lowercase message while keeping spaces + special charac", () => {
      const message = ".AB cd";
      const shift = 1;
      const actual = caesar(message, shift);

      const expected = ".bc de";

      expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
      const message = "ABcdEF";
      const shift = 1;
      const actual = caesar(message, shift);

      const expected = "bcdefg";

      expect(actual).to.equal(expected);
    });
  });


  describe("correct encoding of end alphabets", () => {
    it("should wrap to the front of the alphabet if shift goes 'off' ", () => {
      const message = "zzz";
      const shift = 2;
      const actual = caesar(message, shift);

      const expected = "bbb";

      expect(actual).to.equal(expected);
    });
    it("should wrap to the end of the alphabet if shift goes 'off' ", () => {
      const message = "aaa";
      const shift = -2;
      const actual = caesar(message, shift);

      const expected = "yyy";

      expect(actual).to.equal(expected);
    });
  });
});


describe("Jen's caesar() DECODE tests", () => {
 
  describe("testing if input properly decoded", () => {
    it("should return lowercase message while keeping spaces + special charac", () => {
      const message = "YXW. zab";
      const shift = 1;
      const encode = false;
      const actual = caesar(message, shift, encode);

      const expected = "xwv. yza";

      expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
      const message = "BCdeFg";
      const shift = 1;
      const encode = false;
      const actual = caesar(message, shift, encode);

      const expected = "abcdef";

      expect(actual).to.equal(expected);
    });
  });

  describe("correct decode of end alphabets", () => {
    it("should wrap to the front of the alphabet if shift goes 'off' ", () => {
      const message = "zzz";
      const shift = 2;
      const encode = false;
      const actual = caesar(message, shift, encode);

      const expected = "xxx";

      expect(actual).to.equal(expected);
    });
    it("should wrap to the end of the alphabet if shift goes 'off' ", () => {
      const message = "aaa";
      const shift = -2;
      const encode = false;
      const actual = caesar(message, shift, encode);

      const expected = "ccc";

      expect(actual).to.equal(expected);
    });
  });
});
