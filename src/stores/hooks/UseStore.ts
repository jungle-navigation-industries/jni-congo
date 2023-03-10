import { useContext } from "react";
import IAction from "../../stores/actions/IAction";
import { ApplicationState } from "../../stores/state/ApplicationState";
import {
  ApplicationContext,
  ApplicationStore,
} from "../../stores/store/ApplicationStore";

export default function useStore(): [
  ApplicationState,
  (action: IAction) => void
] {
  const store = useContext<ApplicationStore>(ApplicationContext);

  return [store.state, store.dispatcher];
}
