import { Action } from "../actions/Action";
import IAction from "../actions/IAction";
import {
  ApplicationState,
  defaultApplicationState,
} from "../state/ApplicationState";

export default function applicationReducer(
  state: ApplicationState,
  action: IAction
): ApplicationState {
  switch (action.action) {
    case Action.LogIn: {
      return state;
    }
    case Action.LogOut: {
      return defaultApplicationState();
    }
    default: {
      return state;
    }
  }
}
