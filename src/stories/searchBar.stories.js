import React from "react";
import SearchBar from "../components/searchBar";
import SamplePerson from "./sampleData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Search Page/SearchBar",
  component: SearchBar,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <SearchBar />;

Basic.storyName = "Default";