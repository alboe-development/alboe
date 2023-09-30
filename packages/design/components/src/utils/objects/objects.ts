class Objects extends Object {
  public static deepFreeze<Shape = unknown>(object: Shape): Shape {
    if (!(object instanceof Object)) {
      return object;
    }

    Object.values(object).forEach((value) => Objects.deepFreeze<typeof value>(value));
    Object.freeze(object);

    return object;
  }
}

export default Objects;
