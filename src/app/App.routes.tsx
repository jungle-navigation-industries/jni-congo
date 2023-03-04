import { RouteObject } from "react-router-dom";
import App from "./App";

export const AppRoute = "/";

export function appRoutes(children: Array<RouteObject>): RouteObject {
  return {
    path: AppRoute,
    element: <App />,
    children: children,
  };
}
