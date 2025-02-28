class Timer {
  public stamp: number;

  public constructor() {
    this.stamp = this.current;
  }

  public get current(): number {
    return performance.now() / 1000;
  }

  public get delta(): number {
    const { current } = this;
    const delta = current - this.stamp;

    this.stamp = current;

    return delta;
  }

  public reset(): this {
    this.stamp = this.current;

    return this;
  }
}

export { Timer };
