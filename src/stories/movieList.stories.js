import React from "react";
import MovieList from "../components/movieList";
import SampleMovie from "./sampleData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import Grid from "@material-ui/core/Grid";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Home Page/MovieList",
  component: MovieList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  const movies = [
    { ...SampleMovie.movie, id: 1 },
    { ...SampleMovie.movie, id: 2 },
    { ...SampleMovie.movie, id: 3 },
    { ...SampleMovie.movie, id: 4 },
    { ...SampleMovie.movie, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <MovieList
        movies={movies}
        action={(movie) => <AddToFavoritesIcon movie={movie} />}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
