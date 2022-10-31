// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("Jen's substitution()", () => {
  describe("error handling", () => {
    it("should return false if the substitution alphabet is missing", () => {
      const message = "jen test";
      const actual = substitution(message);
      expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
      const message = "jen test";
      const alphabet = "short";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet does not contain unique characters", () => {
      const message = "jen test";
      const alphabet = "ppmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });
  });

  describe("encoding a message", () => {
    it("should encode a message by using the given substitution alphabet", () => {
      const message = "message";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(message, alphabet);
      const expected = "ykrrpik";

      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const message = "MEssage";
      const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet);
      const expected = "y&ii$r&";

      expect(actual).to.equal(expected);
    });

    it("should include spaces and special characters", () => {
      const message = "MEssage mEssage!";
      const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet);
      const expected = "y&ii$r& y&ii$r&!";

      expect(actual).to.equal(expected);
    });
  });

  describe("decode a message", () => {
    it("should decode a message by using the given substitution alphabet", () => {
      const message = "ykrrpik";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(message, alphabet, false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const message = "y&II$R&";
      const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet, false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });
  });
});
