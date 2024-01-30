const { Log, ConsoleTransport } = require('@alboe/log-utils');

const log = new Log({
  transports: [
    new ConsoleTransport(),
  ],
});

log.log('hello world');

