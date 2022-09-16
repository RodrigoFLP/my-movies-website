import { render, screen } from "@testing-library/react";
import { ReactElement } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import Search from "../components/Search/Search";
import { store } from "../store/store";

describe("Navbar", (): void => {
  it("should have a search textbox", (): void => {
    renderWithProviders(<Navbar centerContent={<Search />} />);
    expect(screen.getByRole("textbox"));
  });

  it("should have a favorites link", (): void => {
    renderWithProviders(<Navbar centerContent={<Search />} />);
    expect(screen.getByTestId("favorites"));
  });
});

const renderWithProviders = (element: ReactElement) => {
  render(
    <BrowserRouter>
      <Provider store={store}>{element}</Provider>
    </BrowserRouter>
  );
};
