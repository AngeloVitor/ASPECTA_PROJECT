import { render } from "@testing-library/react";
import NavBar from ".";

describe("Test App page", () => {
  it("should render 'ASPECTA' text", () => {
    const { getByText } = render(<NavBar />);
    expect(getByText("ASPECTA")).toBeDefined();
  });

  it("should render 'Sobre' text", () => {
    const { getByText } = render(<NavBar />);
    expect(getByText("Sobre")).toBeDefined();
  });

  it("should render 'Preço' text", () => {
    const { getByText } = render(<NavBar />);
    expect(getByText("Preço")).toBeDefined();
  });

  it("should render 'Contato' text", () => {
    const { getByText } = render(<NavBar />);
    expect(getByText("Contato")).toBeDefined();
  });
});
