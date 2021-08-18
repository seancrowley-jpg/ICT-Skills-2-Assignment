import React from "react";
import TvList from "../components/tvList";
import SampleTv from "./sampleData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import AddTvToFavoritesIcon from "../components/cardIcons/addTVToFavorites";
import Grid from "@material-ui/core/Grid";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Discover Tv Page/TvList",
  component: TvList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  const shows = [
    { ...SampleTv.tv, id: 1 },
    { ...SampleTv.tv, id: 2 },
    { ...SampleTv.tv, id: 3 },
    { ...SampleTv.tv, id: 4 },
    { ...SampleTv.tv, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <TvList
        shows={shows}
        action={(show) => <AddTvToFavoritesIcon show={show} />}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
