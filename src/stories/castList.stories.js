import React from "react";
import CastList from "../components/castList";
import SamplePerson from "./sampleData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import AddPersonToFavoritesIcon from "../components/cardIcons/addPersonToFavorites";
import Grid from "@material-ui/core/Grid";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Movie Details Page + Tv Details Page/CastList",
  component: CastList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  const stars = [
    { ...SamplePerson.star, id: 1 },
    { ...SamplePerson.star, id: 2 },
    { ...SamplePerson.star, id: 3 },
    { ...SamplePerson.star, id: 4 },
    { ...SamplePerson.star, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <CastList
        stars={stars}
        action={(star) => <AddPersonToFavoritesIcon star={star} />}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
