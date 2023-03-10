import { act } from "@testing-library/react";
import useStore from "./UseStore";
import { ApplicationContext } from "../store/ApplicationStore";
import { renderHook } from "@testing-library/react";
import { defaultApplicationState } from "../state/ApplicationState";
import { ReactNode, useReducer } from "react";
import applicationReducer from "../reducer/ApplicationReducer";

const StoreWrapper: React.FC<StoreWrapperProperties> = ({ children }) => {
  const [state, dispatcher] = useReducer(
    applicationReducer,
    defaultApplicationState()
  );

  return (
    <ApplicationContext.Provider
      value={{
        state,
        dispatcher,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

interface StoreWrapperProperties {
  children: ReactNode;
}

describe("useStore", () => {
  it("has correct state", () => {
    const { result } = renderHook(() => useStore(), { wrapper: StoreWrapper });

    act(() => {
      const [state] = result.current;

      expect(state.isLoggedIn).toBeFalse();
      expect(state.customerEmail).toBe("");
    });
  });
});
