import { beforeEach, describe, expect, it, vi } from "vitest";
import { Entry } from "@alboe/log-tools";
import { ConsoleTransport } from "@alboe/log-tools";

describe("Entry", () => {
  describe("instance", () => {
    let instance;

    beforeEach(() => {
      instance = new ConsoleTransport();
    });

    describe("process()", () => {
      it("should attempt to log the provided entry to console", async () => {
        const entry = new Entry({ message: "example message" });
        const spy = vi.spyOn(globalThis.console, "log");

        await instance.process({ entry });

        expect(spy).toHaveBeenCalledExactlyOnceWith(entry.message);
      });
    });
  });
});
