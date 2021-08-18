import React from "react";
import PersonDetails from "../components/personDetails";
import SamplePerson from "./sampleData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import AddTvToFavoritesIcon from "../components/cardIcons/addTVToFavorites";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

export default {
  title: "Person Details Page/PersonDetails",
  component: PersonDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => (
  <PersonDetails
    person={SamplePerson.person}
    show={SamplePerson.tv}
    movie={SamplePerson.movie}
    action={(movie) => <AddToFavoritesIcon movie={movie} />}
    actionTv={(show) => <AddTvToFavoritesIcon show={show} />}
  />
);

Basic.storyName = "Default";
