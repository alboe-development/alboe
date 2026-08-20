import { describe, expect, it } from "vitest";
import { Provider, ProviderStyles } from "./component.fixture.js";

describe("Provider", () => {
  describe("static", () => {
    describe("styles", () => {
      it("should be an array containing provider styles", () => {
        expect(Provider.styles).toMatchObject([ProviderStyles]);
      });
    });
  });
});
