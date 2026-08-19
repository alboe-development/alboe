import { Transport } from "@alboe/log-tools";

class TransportFixture extends Transport {
  process() {
    return Promise.resolve(this);
  }
}

export { TransportFixture as Transport };
