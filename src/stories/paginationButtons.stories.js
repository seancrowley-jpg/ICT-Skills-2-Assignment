import React from "react";
import PaginationButtons from "../components/paginationButtons";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Discover Tv + Home Page/PaginationButtons",
  component: PaginationButtons,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <PaginationButtons />;

Basic.storyName = "Default";