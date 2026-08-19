import { beforeEach, describe, expect, it, vi } from "vitest";
import { Entry, Log } from "@alboe/log-tools";
import { Transport } from "./transport.fixture.js";

describe("Entry", () => {
  describe("static", () => {
    describe("constructor()", () => {
      it("should attempt to set the provided options", () => {
        const options = { transports: [new Transport()] };
        const spy = vi.spyOn(Log.prototype, "set");

        new Log(options);

        expect(spy).toHaveBeenCalledWith(options);
      });
    });

    describe("instance", () => {
      it("should be a Log instance", () => {
        expect(Log.instance).toBeInstanceOf(Log);
      });

      it("should be settable to a new Log instance", () => {
        let next = new Log();

        Log.instance = next;

        expect(Log.instance).toBe(next);
      });
    });

    describe("log()", () => {
      it("should call the instance log method", () => {
        const options = { message: "example message" };
        const spy = vi.spyOn(Log.prototype, "log");

        Log.log(options);

        expect(spy).toHaveBeenCalledWith(options);
      });
    });

    describe("write()", () => {
      it("should call the instance write method", () => {
        const options = { entry: new Entry({ message: "example message" }) };
        const spy = vi.spyOn(Log.prototype, "write");

        Log.write(options);

        expect(spy).toHaveBeenCalledWith(options);
      });
    });
  });

  describe("instance", () => {
    let instance;
    let options;

    beforeEach(() => {
      options = { transports: [new Transport()] };
      instance = new Log(options);
    });

    describe("transports", () => {
      it("should be an immutable copy of the provided transports list", () => {
        expect(instance.transports).toMatchObject(options.transports);
      });

      it("should be settable to a new collection of transports", () => {
        const next = [new Transport()];
        instance.transports = next;

        expect(instance.transports).toMatchObject(next);
      });
    });

    describe("log()", () => {
      it("should attempt to write an Entry composed of the provided options", async () => {
        const options = { message: "example message" };
        const expected = new Entry(options);
        const spy = vi.spyOn(instance, "write");

        await instance.log(options);

        expect(spy).toHaveBeenCalledWith(expect.objectContaining(expected));
      });

      it("should return a Promise that resolves to itself", async () => {
        const results = await instance.log();

        expect(results).toBe(instance);
      });
    });

    describe("write()", () => {
      it("should attempt to write the entry on all mounted transports", async () => {
        const entry = new Entry({ message: "example message" });
        const options = { entry };
        const spy = vi.spyOn(Transport.prototype, "process");

        await instance.write(options);

        expect(spy).toHaveBeenCalledTimes(instance.transports.length);
        expect(spy).toHaveBeenCalledWith(expect.objectContaining(options));
      });

      it("should return a Promise that resolves to itself", async () => {
        const results = await instance.write();

        expect(results).toBe(instance);
      });
    });

    describe("set()", () => {
      it("should attempt to set the transports when provided", () => {
        const options = { transports: [new Transport()] };

        instance.set(options);

        expect(instance.transports).toMatchObject(options.transports);
      });

      it("should set the transports to an empty array when not provided", () => {
        const options = {};

        instance.set(options);

        expect(instance.transports).toMatchObject([]);
      });

      it("should return itself", () => {
        expect(instance.set()).toBe(instance);
      });
    });
  });
});
