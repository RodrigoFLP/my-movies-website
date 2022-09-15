import { render, screen } from "@testing-library/react";
import { LoginCard } from "../components/LoginCard";

describe("LoginCard", (): void => {
  it("should contain logo", (): void => {
    render(<LoginCard />);
    expect(screen.getByTestId("logo"));
  });

  it("should contain text input", (): void => {
    render(<LoginCard />);
    expect(screen.getByTestId("email-input"));
  });

  it("should contain password input", (): void => {
    render(<LoginCard />);
    expect(screen.getByTestId("pwd-input"));
  });
});
