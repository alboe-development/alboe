import { Provider } from "@alboe/design-components";

class ProviderFixture extends Provider {
  get namespace() {
    return "component";
  }
}

export { ProviderFixture as Provider };
