import { defaultApplicationState } from "./ApplicationState";

describe("applicationState", () => {
  it("on initialization, should have correct properties", () => {
    const state = defaultApplicationState();

    expect(state.isLoggedIn).toBeFalse();
    expect(state.customerEmail).toBe("");
  });
});
