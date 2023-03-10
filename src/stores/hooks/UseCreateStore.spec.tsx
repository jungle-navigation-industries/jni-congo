import { act, renderHook } from "@testing-library/react";
import applicationReducer from "../reducer/ApplicationReducer";
import { defaultApplicationState } from "../state/ApplicationState";
import useCreateStore from "./UseCreateStore";

describe("useCreateStore", () => {
  it("has correct default values", () => {
    const { result } = renderHook(() =>
      useCreateStore(defaultApplicationState(), applicationReducer)
    );

    act(() => {
      const store = result.current;

      expect(store.state).toEqual(defaultApplicationState());
    });
  });
});
