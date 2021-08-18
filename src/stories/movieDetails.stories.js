import React from "react";
import MovieDetails from "../components/movieDetails";
import SampleMovie from "./sampleData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import AddToPersonFavoritesIcon from "../components/cardIcons/addPersonToFavorites";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

export default {
  title: "Movie Details Page/MovieDetails",
  component: MovieDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => (
  <MovieDetails
    movie={SampleMovie.movie}
    star={SampleMovie.star}
    actionPerson={(star) => <AddToPersonFavoritesIcon star={star} />}
    action={(movie) => <AddToFavoritesIcon movie={movie} />}
  />
);

Basic.storyName = "Default";
