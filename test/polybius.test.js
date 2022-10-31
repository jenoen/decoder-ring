// Write your tests here!
// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("Jen's polybius() tests", () => {
  describe("encoding a message", () => {
    it("should encode a message by translating each letter to number pairs", () => {
      const message = "abc";
      const actual = polybius(message);
      const expected = "112131";

      expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
      const message = "aBc";
      const actual = polybius(message);
      const expected = "112131";

      expect(actual).to.equal(expected);
    });

    it("maintains spaces throughout", () => {
      const message = "abc abc";
      const actual = polybius(message);
      const expected = "112131 112131";

      expect(actual).to.equal(expected);
    });

    it("returns 42 for either i/j", () => {
      const message = "jki jki";
      const actual = polybius(message);
      const expected = "425242 425242";

      expect(actual).to.equal(expected);
    });
  });
  describe("decoding a message", () => {
    it("should decode a message by translating each number pair to letters", () => {
      const message = "112131";
      const actual = polybius(message, false);
      const expected = "abc";

      expect(actual).to.equal(expected);
    });

    it("maintains spaces throughout", () => {
      const message = "112131 112131";
      const actual = polybius(message, false);
      const expected = "abc abc";

      expect(actual).to.equal(expected);
    });

    it("returns 'i/j' for '42'", () => {
      const message = "425242 425242";
      const actual = polybius(message, false);
      const expected = "(i/j)k(i/j) (i/j)k(i/j)";

      expect(actual).to.equal(expected);
    });
  });
});
