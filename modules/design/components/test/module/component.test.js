import { beforeEach, describe, expect, it, vi } from 'vitest';
import { COMPONENT_CONSTANTS } from '@alboe/design-components';
import { Component } from '../fixtures';

describe('Component', () => {
  describe('instance', () => {
    let instance;

    beforeEach(() => {
      instance = new Component();
    });

    describe('render()', () => {
      it('should be composed of a generic slot', () => {
        const template = instance.render().strings[0];

        expect(template).toBe('<slot></slot>');
      });
    });

    describe('prefixum', () => {
      it('should be the default value', () => {
        expect(instance.prefixum).toBe(COMPONENT_CONSTANTS.PREFIXUM);
      });
    });
  });

  describe('static', () => {
    describe('styles', () => {
      it('should be an empty array', () => {
        expect(Component.styles).toMatchObject([]);
      });
    });

    describe('register()', () => {
      let spies;

      beforeEach(() => {
        spies = {
          globalThis: {
            customElements: {
              define: vi.spyOn(globalThis.customElements, 'define').mockReturnValue(),
              get: vi.spyOn(globalThis.customElements, 'get').mockReturnValue(false),
            },
          },
        };
      });

      it('should utilize itself when component is not provided', () => {
        Component.register();

        expect(spies.globalThis.customElements.define).toBeCalledWith(expect.anything(), Component);
      });

      it('should utilize its namespace and prefixum when they are not provided', () => {
        Component.register();
        
        const qualified = `${Component.prototype.prefixum}-${Component.prototype.namespace}`;

        expect(spies.globalThis.customElements.get).toBeCalledWith(qualified);
      });

      it('it should use the global registry when it is not provided', () => {
        Component.register();

        expect(spies.globalThis.customElements.get).toHaveBeenCalled();
        expect(spies.globalThis.customElements.define).toHaveBeenCalled();
      });

      it('should utilize the provided component', () => {
        Component.register({ component: Component });

        expect(spies.globalThis.customElements.define).toBeCalledWith(expect.anything(), Component);
      });

      it('should utilize the provided namespace', () => {
        const namespace = 'example';

        Component.register({ namespace });

        const qualified = `${Component.prototype.prefixum}-${namespace}`;

        expect(spies.globalThis.customElements.get).toBeCalledWith(qualified);
      });

      it('should utilize the provided prefixum', () => {
        const prefixum = 'example';

        Component.register({ prefixum });

        const qualified = `${prefixum}-${Component.prototype.namespace}`;

        expect(spies.globalThis.customElements.get).toBeCalledWith(qualified);
      });

      it('should utilize the provided registry', () => {
        const registry = globalThis.customElements;
        
        Component.register({ registry });

        expect(registry.get).toHaveBeenCalled();
        expect(registry.define).toHaveBeenCalled();
      });

      it('should not attempt to register a component if its namespace is already in use', () => {
        spies.globalThis.customElements.get.mockReturnValue(true);

        Component.register();

        expect(spies.globalThis.customElements.define).toHaveBeenCalledTimes(0);
      });
    });
  });
});
