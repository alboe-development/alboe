const { Transport } = require('@alboe/log-utils');

class TransportFixture extends Transport {
  transport() {
    return Promise.resolve();
  }
}

module.exports = TransportFixture;
