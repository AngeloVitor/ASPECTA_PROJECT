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
  it("renders remember me checkbox", () => {
    const { getByRole } = render(<Page />);
    expect(getByRole("switch")).toBeDefined();
  });
  it("renders submit button", () => {
    const { getByRole } = render(<Page />);
    expect(getByRole("button", { name: "Submit" })).toBeDefined();
  });
  it("renders link to register", () => {
    const { getByText } = render(<Page />);
    expect(getByText("Don't have an account?")).toBeDefined();
    expect(getByText("Register")).toBeDefined();
  });
});
