const { Provider } = require('@alboe/design-components');

class FixtureProvider extends Provider {
  get namespace() {
    return 'adc-fixture-provider';
  }
}

module.exports = { Provider: FixtureProvider };
