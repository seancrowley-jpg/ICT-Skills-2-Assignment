import React from "react";
import TvCard from "../components/tvCard";
import SampleTv from "./sampleData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import { action } from "@storybook/addon-actions";
import AddTvToFavoritesIcon from "../components/cardIcons/addTVToFavorites";

export default {
  title: "Discover Tv Page/TvCard",
  component: TvCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <TvCard
      show={SampleTv.tv}
      action={(show) => <AddTvToFavoritesIcon show={show} />}
      taging={(show) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleTv.tv, poster_path: undefined };
  return (
    <TvCard
      show={sampleNoPoster}
      action={(show) => <AddTvToFavoritesIcon show={show} />}
      taging={(show) => null}
    />
  );
};
Exceptional.storyName = "exception";