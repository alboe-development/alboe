const { Component } = require('@alboe/design-components');

class FixtureComponent extends Component {
  get namespace() {
    return 'adc-fixture-component';
  }

  static styles = [];
}

module.exports = { Component: FixtureComponent };
