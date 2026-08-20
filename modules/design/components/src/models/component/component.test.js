import { beforeEach, describe, expect, it, vi } from "vitest";
import { Component } from "./component.fixture.js";

describe("Component", () => {
  let spies;

  beforeEach(() => {
    spies = {
      globalThis: {
        customElements: {
          get: vi.spyOn(globalThis.customElements, "get").mockReturnValue(false),
          define: vi.spyOn(globalThis.customElements, "define").mockReturnValue(),
        },
      },
    };
  });

  describe("static", () => {
    describe("styles", () => {
      it("should be an empty array", () => {
        expect(Component.styles).toMatchObject([]);
      });
    });

    describe("register()", () => {
      it("should validate if the Component instance is already defined", () => {
        const qualified = `${Component.prototype.prefix}-${Component.prototype.namespace}`;

        Component.register();

        expect(spies.globalThis.customElements.get).toHaveBeenCalledExactlyOnceWith(qualified);
      });

      it("should define the component instance", () => {
        const qualified = `${Component.prototype.prefix}-${Component.prototype.namespace}`;

        Component.register();

        expect(spies.globalThis.customElements.define).toHaveBeenCalledExactlyOnceWith(qualified, Component);
      });

      it("should not define the component if it is already defined", () => {
        spies.globalThis.customElements.get.mockReturnValue(true);

        Component.register();

        expect(spies.globalThis.customElements.define).not.toHaveBeenCalled();
      });

      it("should accept a component", () => {
        class ComponentNext extends Component {
          get namespace() { return "component-next"; }
        }
        const qualified = `${ComponentNext.prototype.prefix}-${ComponentNext.prototype.namespace}`;

        ComponentNext.register({ component: ComponentNext });

        expect(spies.globalThis.customElements.define).toHaveBeenCalledExactlyOnceWith(qualified, ComponentNext);
      });

      it("should accept a namespace", () => {
        const namespace = "example-next";
        const qualified = `${Component.prototype.prefix}-${namespace}`;

        Component.register({ namespace });

        expect(spies.globalThis.customElements.define).toHaveBeenCalledExactlyOnceWith(qualified, Component);
      });

      it("should accept a prefix", () => {
        const prefix = "epf";
        const qualified = `${prefix}-${Component.prototype.namespace}`;

        Component.register({ prefix });

        expect(spies.globalThis.customElements.define).toHaveBeenCalledExactlyOnceWith(qualified, Component);
      });

      it("should accept a registry", () => {
        const registry = { define: vi.fn(), get: vi.fn().mockReturnValue(false) };
        const qualified = `${Component.prototype.prefix}-${Component.prototype.namespace}`;

        Component.register({ registry });

        expect(registry.define).toHaveBeenCalledExactlyOnceWith(qualified, Component);
      });
    });
  });

  describe("instance", () => {
    describe("render()", () => {
      it("should return the default slot", () => {
        expect(Component.prototype.render()).toMatchObject({
          strings: [
            "<slot></slot>",
          ],
        });
      });
    });
  });
});
