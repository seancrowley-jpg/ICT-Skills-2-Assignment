import React from "react";
import TvDetails from "../components/tvDetails";
import SampleTv from "./sampleData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import AddToPersonFavoritesIcon from "../components/cardIcons/addPersonToFavorites";
import AddToTvFavoritesIcon from "../components/cardIcons/addTVToFavorites";

export default {
  title: "Tv Details Page/TvDetails",
  component: TvDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => (
  <TvDetails
    show={SampleTv.tv}
    star={SampleTv.star}
    actionPerson={(star) => <AddToPersonFavoritesIcon star={star} />}
    action={(show) => <AddToTvFavoritesIcon show={show} />}
  />
);

Basic.storyName = "Default";