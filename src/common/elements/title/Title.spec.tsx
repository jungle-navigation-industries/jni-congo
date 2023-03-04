import { render, screen } from "@testing-library/react";
import Title from "./Title";
import { TitleSize } from "./TitleSize";

describe("title", () => {
  it("has proper title content", () => {
    const title = "myTitle";

    render(<Title titleSize={TitleSize.One} title={title} />);

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it("title size one, has correct properties", () => {
    render(<Title titleSize={TitleSize.One} title="title" />);

    const result = screen.getByText("title");

    expect(result).toHaveClass("title", "is-1");
  });

  it("title size two, has correct properties", () => {
    render(<Title titleSize={TitleSize.Two} title="title" />);

    const result = screen.getByText("title");

    expect(result).toHaveClass("title", "is-2");
  });

  it("title size three, has correct properties", () => {
    render(<Title titleSize={TitleSize.Three} title="title" />);

    const result = screen.getByText("title");

    expect(result).toHaveClass("title", "is-3");
  });

  it("title size four, has correct properties", () => {
    render(<Title titleSize={TitleSize.Four} title="title" />);

    const result = screen.getByText("title");

    expect(result).toHaveClass("title", "is-4");
  });

  it("title size five, has correct properties", () => {
    render(<Title titleSize={TitleSize.Five} title="title" />);

    const result = screen.getByText("title");

    expect(result).toHaveClass("title", "is-5");
  });

  it("title size six, has correct properties", () => {
    render(<Title titleSize={TitleSize.Six} title="title" />);

    const result = screen.getByText("title");

    expect(result).toHaveClass("title", "is-6");
  });

  it("title size default, has correct properties", () => {
    render(<Title titleSize={7} title="title" />);

    const result = screen.getByText("title");

    expect(result).toHaveClass("title", "is-6");
  });
});
