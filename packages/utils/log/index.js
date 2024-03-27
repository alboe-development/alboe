const { Log, ConsoleTransport } = require('@alboe/log-utils');

Log.mount(new ConsoleTransport());

Log.log({ example: 'value' });
