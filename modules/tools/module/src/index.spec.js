import { describe, expect, it } from "vitest";
import { value } from "@alboe/module-tools";

describe("entry", () => {
  it("should export value.a", () => {
    expect(value.a).toBe(true);
  });

  it("should export value.b", () => {
    expect(value.b).toBe(123);
  });

  it("should export value.c", () => {
    expect(value.c).toBe("example");
  });
});
