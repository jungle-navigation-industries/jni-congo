import ValueDefaults from "./ValueDefaults";

describe("valueDefaults", () => {
  it("string returns correct value", () => {
    expect(ValueDefaults.string).toBe("");
  });

  it("boolean returns correct value", () => {
    expect(ValueDefaults.boolean).toBeFalse();
  });

  it("number returns correct value", () => {
    expect(ValueDefaults.number).toBe(0);
  });

  it("array returns empty", () => {
    expect(ValueDefaults.array()).toStrictEqual([]);
  });

  it("arrays should be unique", () => {
    const first = ValueDefaults.array<string>();

    const second = ValueDefaults.array<string>();

    expect(first).not.toBe(second);
  });
});
