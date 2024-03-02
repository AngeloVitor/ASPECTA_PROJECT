import { render } from "@testing-library/react";
import Page from "./page";

describe("Login Page", () => {
  it("should be render email input", () => {
    const { getByPlaceholderText } = render(<Page />);
    expect(getByPlaceholderText("Email")).toBeDefined();
  });
  it("should be render password input", () => {
    const { getByPlaceholderText } = render(<Page />);
    expect(getByPlaceholderText("Password")).toBeDefined();
  });
  it("renders submit button", () => {
    const { getByRole } = render(<Page />);
    expect(getByRole("button", { name: "Submit" })).toBeDefined();
  });
  it("renders link to login", () => {
    const { getByText } = render(<Page />);
    expect(getByText("Do'you have an account?")).toBeDefined();
    expect(getByText("Login")).toBeDefined();
  });
});
