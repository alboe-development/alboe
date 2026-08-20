import { beforeEach, describe, expect, it, vi } from "vitest";
import { Entry } from "@alboe/log-tools";

describe("Entry", () => {
  describe("static", () => {
    describe("constructor()", () => {
      it("should attempt to set the provided options", () => {
        const options = { message: "example message" };
        const spy = vi.spyOn(Entry.prototype, "set");

        new Entry(options);

        expect(spy).toHaveBeenCalledWith(options);
      });
    });
  });

  describe("instance", () => {
    let instance;
    let options;

    beforeEach(() => {
      options = { message: "example message" };
      instance = new Entry(options);
    });

    describe("message", () => {
      it("should be the constructed message", () => {
        expect(instance.message).toBe(options.message);
      });

      it("should be settable", () => {
        const next = "example message 2";
        instance.message = next;

        expect(instance.message).toBe(next);
      });
    });

    describe("set()", () => {
      it("should return itself", () => {
        expect(instance.set()).toBe(instance);
      });

      it("should set the message to the provided message", () => {
        const message = "example message 3";

        instance.set({ message });

        expect(instance.message).toBe(message);
      });
    });
  });
});
