import { render, screen } from "@testing-library/react";
import App from "./App";

describe("app", () => {
  it("renders learn react link", () => {
    render(<App />);

    const linkElement = screen.getByText(/jungle navigation industries/i);

    expect(linkElement).toBeInTheDocument();
  });
});
