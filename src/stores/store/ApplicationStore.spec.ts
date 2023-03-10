import { defaultApplicationStore } from "./ApplicationStore";
import { defaultApplicationState } from "../state/ApplicationState";

describe("applicationStore", () => {
  it("defaultApplicationStore has correct properties", () => {
    const defaultStore = defaultApplicationStore();

    expect(defaultStore.state).toStrictEqual(defaultApplicationState());
    expect(defaultStore.dispatcher).not.toThrow();
    expect(defaultStore.dispatcher).toBeFunction();
  });
});
