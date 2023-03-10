import ValueDefaults from "../../utilities/value-defaults/ValueDefaults";

export interface ApplicationState {
  isLoggedIn: boolean;
  customerEmail: string;
}

export function defaultApplicationState(): ApplicationState {
  return {
    isLoggedIn: ValueDefaults.boolean,
    customerEmail: ValueDefaults.string,
  };
}
