import { RouteObject } from "react-router-dom";
import EsiAuthenticationContainer from "./EsiAuthenticationContainer";

export function esiAuthenticationRoutes(): RouteObject {
  return {
    element: <EsiAuthenticationContainer />,
    path: "/callback",
  };
}
