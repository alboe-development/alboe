const assert = require('node:assert');
const { describe, it } = require('node:test');
const { Provider } = require('./class.fixture');

describe('Provider', () => {
  describe('static', () => {
    describe('styles', () => {
      it('should be defined as an array with a single set of styles', () => {
        const { styles } = Provider;

        assert(Array.isArray(styles));
        assert.equal(styles.length, 1);
      });
    });
  });
});
