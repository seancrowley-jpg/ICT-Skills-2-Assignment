import React from "react";
import PageTemplate from "../components/templateSearchPage";
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const SearchPage = (props) => {

  return (
    <PageTemplate
      title="Search for a Movie"
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
);
};

export default SearchPage;