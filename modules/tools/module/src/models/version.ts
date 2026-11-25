/**
 * Constants associated with the Version class definition.
 *
 * @internal
 */
const VERSION_CONSTANTS = {
  /** Default values associated with the Version class definition. */
  DEFAULTS: {
    /** The major version default value. */
    MAJOR: 0,

    /** The minor version default value. */
    MINOR: 0,

    /** The patch version default value. */
    PATCH: 0,

    /** The default version tag. */
    TAG: "latest",
  },

  /** Regex patterns associated with the Version class definition. */
  PATTERNS: {
    /** Regex pattern for matching semantic verisons. */
    VERSION: /^\d+\.\d+\.\d+(?:-[A-Za-z0-9-]+\.[A-Za-z0-9-]+)?$/ as RegExp,
  },
} as const;

/**
 * Possible semantic version slots for the Version class definition.
 *
 * @internal
 */
type VersionSemanticSlot = "major" | "minor" | "patch";

/**
 * Configuration options for the Version class definition.
 *
 * @internal
 */
interface VersionOptions {
  /** The major version. */
  major?: number;

  /** The minor version. */
  minor?: number;

  /** The patch version. */
  patch?: number;

  /** The version associated with the release tag. */
  release?: string;

  /** The serialized version. */
  serial?: string;

  /** The release tag. */
  tag?: string;
};

/**
 * The Version class definition is used to represent a semantic version for a given module manifest.
 *
 * @internal
 */
class Version {
  /** The major version. */
  public major: number;

  /** The minor version. */
  public minor: number;

  /** The patch version. */
  public patch: number;

  /** The version associated with the release tag. */
  public release?: string;

  /** The release tag. */
  public tag: string;

  /**
   * Construct a new Version instance.
   *
   * @param options - Options to use when constructing a new Version instance.
   */
  public constructor(options?: VersionOptions) {
    this.major = VERSION_CONSTANTS.DEFAULTS.MAJOR;
    this.minor = VERSION_CONSTANTS.DEFAULTS.MINOR;
    this.patch = VERSION_CONSTANTS.DEFAULTS.PATCH;
    this.tag = VERSION_CONSTANTS.DEFAULTS.TAG;

    this.set(options);
  }

  /**
   * The serial of this Version instance.
   */
  public get serial(): string {
    const { major, minor, patch, release, tag } = this;
    let serial = [major, minor, patch].join(".");

    if (tag !== VERSION_CONSTANTS.DEFAULTS.TAG) {
      serial = `${serial}-${tag}.${release}`;
    }

    return serial;
  }

  public set serial(value: string) {
    if (!VERSION_CONSTANTS.PATTERNS.VERSION.test(value)) {
      return;
    }

    const [semantics, ...details] = value.split("-");
    const [major, minor, patch] = semantics.split(".").map((part) => Number.parseInt(part, 10));
    const [providedTag, release] = details.join("-").split(".");
    const tag = providedTag || VERSION_CONSTANTS.DEFAULTS.TAG;

    this.set({ major, minor, patch, release, tag });
  }

  /**
   * Increments a semantic slot and resets its lower-order slots.
   *
   * @param options - The slot and the amount to increment.
   * @returns This Version instance.
   */
  public increment(options: { value?: number; slot?: VersionSemanticSlot; } = {}): this {
    const { value = 1, slot = "patch" } = options;

    this[slot] = this[slot] + value;

    return this.roll({ slot });
  }

  /**
   * Reset the semantic slots below the selected slot.
   *
   * @param options - The semantic slot to roll from.
   * @returns This version instance.
   */
  public roll(options: { slot?: VersionSemanticSlot; } = {}): this {
    const { slot } = options;

    switch (slot) {
      case "major":
        this.set({ minor: 0, patch: 0 });
        break;

      case "minor":
        this.set({ patch: 0 });
        break;
    }

    return this;
  }

  /**
   * Updates this Version instance with the provided values.
   *
   * @param options - The version values to apply.
   * @returns This Version instance.
   */
  public set(options: VersionOptions = {}): this {
    const { major, minor, patch, release, serial, tag } = options;

    if (serial !== undefined) {
      this.serial = serial;
    }

    if (major !== undefined) {
      this.major = major;
    }

    if (minor !== undefined) {
      this.minor = minor;
    }

    if (patch !== undefined) {
      this.patch = patch;
    }

    if (tag !== undefined) {
      this.tag = tag;
    }

    if (Object.hasOwn(options, "release")) {
      this.release = release;
    }

    return this;
  }
}

export {
  Version,
  VERSION_CONSTANTS,
  type VersionOptions,
  type VersionSemanticSlot,
};
