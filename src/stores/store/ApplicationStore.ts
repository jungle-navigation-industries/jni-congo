import { createContext } from "react";
import IAction from "../actions/IAction";
import {
  ApplicationState,
  defaultApplicationState,
} from "../state/ApplicationState";

export interface ApplicationStore {
  state: ApplicationState;
  dispatcher: (action: IAction) => void;
}

export function defaultApplicationStore(): ApplicationStore {
  return {
    state: defaultApplicationState(),
    dispatcher: (): void => {
      return;
    },
  };
}

export const ApplicationContext = createContext(defaultApplicationStore());
