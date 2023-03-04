import { RouteObject } from "react-router-dom";
import Home from "./Home";

export function homeRoutes(): RouteObject {
  return {
    element: <Home />,
    index: true,
  };
}
