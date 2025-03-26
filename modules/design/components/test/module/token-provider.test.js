const assert = require('node:assert');
const { beforeEach, describe, it } = require('node:test');
const { Component, TokenProvider } = require('@alboe/design-components');

describe('TokenProvider', () => {
  describe('static', () => {
    describe('CONSTANTS', () => {
      let CONSTANTS;

      beforeEach(() => {
        CONSTANTS = TokenProvider.CONSTANTS;
      });

      it('should include the namespace', () => {
        assert.equal(CONSTANTS.NAMESPACE, 'adc-token-provider');
      });
    });

    describe('styles', () => {
      let styles;

      beforeEach(() => {
        styles = TokenProvider.styles;
      });

      it('should include both the parent styles and the applied styles', () => {
        assert.equal(styles.length, Component.styles.length + 1);
      });
    });

    describe('properties', () => {
      let properties;

      beforeEach(() => {
        properties = TokenProvider.properties;
      });

      it('should map "dimension" to "adt-dimension"', () => {
        assert.equal(properties.dimension.attribute, 'adt-dimension');
      });

      it('should reflect "dimension"', () => {
        assert.equal(properties.dimension.reflect, true);
      });

      it('should cast "dimension" as a "String"', () => {
        assert.equal(properties.dimension.type, String);
      });

      it('should map "duration" to "adt-duration"', () => {
        assert.equal(properties.duration.attribute, 'adt-duration');
      });

      it('should reflect "duration"', () => {
        assert.equal(properties.duration.reflect, true);
      });

      it('should cast "duration" as a "String"', () => {
        assert.equal(properties.duration.type, String);
      });

      it('should map "mode" to "adt-mode"', () => {
        assert.equal(properties.mode.attribute, 'adt-mode');
      });

      it('should reflect "mode"', () => {
        assert.equal(properties.mode.reflect, true);
      });

      it('should cast "mode" as a "String"', () => {
        assert.equal(properties.mode.type, String);
      });
    });
  });

  describe('instance', () => {
    let instance;

    beforeEach(() => {
      instance = new TokenProvider();
    });

    describe('namespace', () => {
      it('should be the CONSTANT.NAMESPACE value', () => {
        assert.equal(instance.namespace, TokenProvider.CONSTANTS.NAMESPACE);
      });
    });
  });
});
