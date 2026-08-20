import { describe, expect, it } from "vitest";
import { ProviderStyles } from "@alboe/design-components";
import { Provider } from "./component.fixture.js";

describe("Provider", () => {
  describe("static", () => {
    describe("styles", () => {
      it("should be an array containing provider styles", () => {
        expect(Provider.styles.includes(ProviderStyles)).toBeTruthy();
      });
    });
  });
});
