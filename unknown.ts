declare const maybe: unknown;

if (typeof maybe === "number") {
  const aNumber: number = maybe;
}

if (maybe === true) {
  const aBoolean: boolean = maybe;
}

if (typeof maybe === "string") {
  const aString: string = maybe;
}
