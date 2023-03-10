import applicationReducer from "./ApplicationReducer";
import { defaultApplicationState } from "../state/ApplicationState";
import { Action } from "../actions/Action";

describe("applicationReducer", () => {
  it("default returns current state", () => {
    const defaultState = defaultApplicationState();

    const result = applicationReducer(defaultState, { action: 10 });

    expect(result).toBe(defaultState);
  });

  it("on log in returns correct state", () => {
    const defaultState = defaultApplicationState();

    const result = applicationReducer(defaultState, { action: Action.LogIn });

    expect(result).toBe(defaultState);
  });

  it("on log out returns correct state", () => {
    const defaultState = defaultApplicationState();

    const result = applicationReducer(defaultState, { action: Action.LogOut });

    expect(result).toEqual(defaultApplicationState());
  });
});
