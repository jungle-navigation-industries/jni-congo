import { useReducer } from "react";
import IAction from "../../stores/actions/IAction";
import { ApplicationState } from "../../stores/state/ApplicationState";
import { ApplicationStore } from "../../stores/store/ApplicationStore";

export default function useCreateStore(
  initialState: ApplicationState,
  reducer: (state: ApplicationState, action: IAction) => ApplicationState
): ApplicationStore {
  const [state, dispatcher] = useReducer(reducer, initialState);

  return { state, dispatcher };
}
