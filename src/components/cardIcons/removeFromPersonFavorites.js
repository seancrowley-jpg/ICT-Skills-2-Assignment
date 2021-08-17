import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromPersonFavoritesIcon = ({ person }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromPeopleFavorites = (e) => {
    e.preventDefault();
    context.removeFromPeopleFavorites(person);
  };
  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromPeopleFavorites}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromPersonFavoritesIcon;