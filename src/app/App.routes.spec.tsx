import { AppRoute, appRoutes } from "./App.routes";

describe("app.routes", () => {
  it("appRoute has correct path", () => {
    expect(AppRoute).toBe("/");
  });

  it("routeObject has correct properties", () => {
    const routeObject = appRoutes([]);

    expect(routeObject.path).toBe("/");
    expect(routeObject.element).not.toBeNull();
  });
});
