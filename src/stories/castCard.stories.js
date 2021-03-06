import React from "react";
import CastCard from "../components/castCard";
import SampleCast from "./sampleData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import { action } from "@storybook/addon-actions";
import AddPersonToFavoritesIcon from "../components/cardIcons/addPersonToFavorites";

export default {
  title: "Movie Details Page/CastCard",
  component: CastCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <CastCard
      star={SampleCast.star}
      action={(star) => <AddPersonToFavoritesIcon star={star} />}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleCast.star, profile_path: undefined };
  return (
    <CastCard
      star={sampleNoPoster}
      action={(star) => <AddPersonToFavoritesIcon star={star} />}
    />
  );
};
Exceptional.storyName = "exception";