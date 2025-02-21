const assert = require('node:assert');
const { afterEach, beforeEach, describe, mock, it, verifyThat } = require('node:test');
const { Component } = require('./class.fixture');

describe('Component', () => {
  describe('static', () => {
    describe('styles', () => {
      it('should be defined as an empty array', () => {
        const { styles } = Component;

        assert(Array.isArray(styles));
        assert.equal(styles.length, 0);
      });
    });

    describe('register()', () => {
      let spies;

      beforeEach(() => {
        globalThis.customElements = {
          define: mock.fn(),
          get: mock.fn(),
        };

        spies = {
          Component: {
            prototype: {
              namespace: mock.getter(Component.prototype, 'namespace'),
            }
          },
        };
      });

      afterEach(() => {
        delete globalThis.customElements;
      });

      it('should register the provided component', () => {
        const options = { component: {} };
        
        Component.register(options);

        const { calls } = globalThis.customElements.define.mock;

        assert.equal(calls.length, 1);
        assert.equal(calls[0].arguments[1], options.component);
      });

      it('should register itself when no component is provided', () => {
        const options = { component: undefined };
        
        Component.register(options);

        const { calls } = globalThis.customElements.define.mock;

        assert.equal(calls.length, 1);
        assert.equal(calls[0].arguments[1], Component);
      });

      it('should use the provided namespace when registering', () => {
        const options = { namespace: 'example-namespace' };
        
        Component.register(options);

        const { calls } = globalThis.customElements.define.mock;

        assert.equal(calls.length, 1);
        assert.equal(calls[0].arguments[0], options.namespace);
      });

      it('should use itself when registering when no namespace is provided', () => {
        const options = { namespace: undefined };
        
        Component.register(options);

        const { calls } = globalThis.customElements.define.mock;

        assert.equal(calls.length, 1);
        assert.equal(calls[0].arguments[0], Component.prototype.namespace);
      });

      it('should use the provided registry when registering', () => {
        const options = {
          registry: {
            define: mock.fn(),
            get: () => undefined,
          }
        };
        
        Component.register(options);

        const { calls } = options.registry.define.mock;

        assert.equal(calls.length, 1);
      });

      it('should use the global registery when no registry is provided', () => {
        const options = { registry: undefined };
        
        Component.register(options);

        const { calls } = globalThis.customElements.define.mock;

        assert.equal(calls.length, 1);
      });

      it('should return without registering the component if it is already registered', () => {
        const options = {
          registry: {
            define: mock.fn(),
            get: () => ({}),
          }
        };
        
        Component.register(options);

        const { calls } = globalThis.customElements.define.mock;

        assert.equal(calls.length, 0);
      });
    });
  });
});
