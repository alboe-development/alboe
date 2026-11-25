import { beforeEach, describe, expect, it, vi } from "vitest";
import { Version, VERSION_CONSTANTS } from "@alboe/module-tools";

describe("Version", () => {
  describe("instance", () => {
    let instance;
    let options;

    beforeEach(() => {
      options = {
        major: 1,
        minor: 2,
        patch: 3,
        release: "4",
        tag: "example",
      };

      instance = new Version(options);
    });

    describe("major", () => {
      it("should be defined", () => {
        expect(instance.major).toBeDefined();
      });

      it("should match the provided major value", () => {
        expect(instance.major).toBe(options.major);
      });
    });

    describe("minor", () => {
      it("should be defined", () => {
        expect(instance.minor).toBeDefined();
      });

      it("should match the provided minor value", () => {
        expect(instance.minor).toBe(options.minor);
      });
    });

    describe("patch", () => {
      it("should be defined", () => {
        expect(instance.patch).toBeDefined();
      });

      it("should match the provided patch value", () => {
        expect(instance.patch).toBe(options.patch);
      });
    });

    describe("release", () => {
      it("should match the provided release value", () => {
        expect(instance.release).toBe(options.release);
      });
    });

    describe("tag", () => {
      it("should be defined", () => {
        expect(instance.tag).toBeDefined();
      });

      it("should match the provided tag value", () => {
        expect(instance.tag).toBe(options.tag);
      });
    });

    describe("serial", () => {
      it("should serialize a tagless version when the tag is the default tag", () => {
        instance.tag = VERSION_CONSTANTS.DEFAULTS.TAG;

        expect(instance.serial).toBe(`${options.major}.${options.minor}.${options.patch}`);
      });

      it("should serialze a tagged version when the tag is not default", () => {
        instance.tag = "example";

        expect(instance.serial.includes(instance.tag)).toBeTruthy();
      });

      it("should use the default tag when no tag is provided", () => {
        instance.serial = "4.5.6";

        expect(instance.tag).toBe(VERSION_CONSTANTS.DEFAULTS.TAG);
      });

      it("should parse a provided serial", () => {
        instance.serial = "4.5.6-next.7";

        expect(instance.major).toBe(4);
        expect(instance.minor).toBe(5);
        expect(instance.patch).toBe(6);
        expect(instance.tag).toBe("next");
        expect(instance.release).toBe("7");
      });

      it("should ignore invalid serials", () => {
        const prev = instance.serial;
        instance.serial = "invalid version";

        expect(instance.serial).toBe(prev);
      });
    });

    describe("increment()", () => {
      it("should increment the patch by 1 when no options are provided", () => {
        instance.increment();

        expect(instance.patch).toBe(options.patch + 1);
      });

      it("should increment the provided slot by the provided value", () => {
        instance.increment({ slot: "major", value: 5 });

        expect(instance.major).toBe(options.major + 5);
      });

      it("should attempt to roll the version based on what was incremented", () => {
        const spy = vi.spyOn(instance, "roll");

        instance.increment({ slot: "minor", value: 3 });

        expect(spy).toHaveBeenCalledExactlyOnceWith(expect.objectContaining({ slot: "minor" }));
      });

      it("should return itself", () => {
        expect(instance.increment()).toBe(instance);
      });
    });

    describe("roll()", () => {
      it("should roll the major slot", () => {
        instance.roll({ slot: "major" });

        expect(instance.major).toBe(options.major);
        expect(instance.minor).toBe(0);
        expect(instance.patch).toBe(0);
      });

      it("should roll the minor slot", () => {
        instance.roll({ slot: "minor" });

        expect(instance.major).toBe(options.major);
        expect(instance.minor).toBe(options.minor);
        expect(instance.patch).toBe(0);
      });

      it("should roll nothing when provided with a patch slot", () => {
        instance.roll({ slot: "patch" });

        expect(instance.major).toBe(options.major);
        expect(instance.minor).toBe(options.minor);
        expect(instance.patch).toBe(options.patch);
      });

      it("should return itself", () => {
        expect(instance.roll()).toBe(instance);
      });
    });

    describe("set()", () => {
      it("should update the serial when provided", () => {
        const serial = "4.5.6-next.7";

        instance.set({ serial });

        expect(instance.serial).toBe(serial);
      });

      it("should update the major value when provided", () => {
        const major = 4;

        instance.set({ major });

        expect(instance.major).toBe(major);
      });

      it("should update the minor value when provided", () => {
        const minor = 5;

        instance.set({ minor });

        expect(instance.minor).toBe(minor);
      });

      it("should update the patch value when provided", () => {
        const patch = 6;

        instance.set({ patch });

        expect(instance.patch).toBe(patch);
      });

      it("should update the tag value when provided", () => {
        const tag = "next";

        instance.set({ tag });

        expect(instance.tag).toBe(tag);
      });

      it("should update the release value when provided", () => {
        const release = "example";

        instance.set({ release });

        expect(instance.release).toBe(release);
      });

      it("should return itself", () => {
        expect(instance.set()).toBe(instance);
      });
    });
  });
});
