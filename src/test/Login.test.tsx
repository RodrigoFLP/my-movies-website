import { render, screen } from "@testing-library/react";
import React, { JSXElementConstructor, ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Login } from "../components/Login";
import { store } from "../store/store";

describe("LoginCard", (): void => {
  it("should contain logo", (): void => {
    renderWithProviders(<Login />);
    expect(screen.getByTestId("logo"));
  });

  it("should contain text input", (): void => {
    renderWithProviders(<Login />);
    expect(screen.getByTestId("email-input"));
  });

  it("should contain password input", (): void => {
    renderWithProviders(<Login />);
    expect(screen.getByTestId("pwd-input"));
  });
});

const renderWithProviders = (element: ReactElement) => {
  render(
    <BrowserRouter>
      <Provider store={store}>{element}</Provider>
    </BrowserRouter>
  );
};
