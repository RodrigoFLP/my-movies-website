import { render, screen } from "@testing-library/react";
import { Navbar } from "../components/Navbar";

describe("Navbar", (): void => {
  it("should have a search textbox", (): void => {
    render(<Navbar />);
    expect(screen.getByRole("textbox"));
  });

  it("should have a favorites link", (): void => {
    render(<Navbar />);
    expect(screen.getByTestId("favorites"));
  });
});
