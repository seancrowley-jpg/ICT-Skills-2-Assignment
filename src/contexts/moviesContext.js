import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [myStarRatings, setStarRatings] = useState([]);
  const [myReviews, setMyReviews] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [tvFavorites, setTvFavorites] = useState([]);
  const [mustWatch, setMustWatch] = useState([]);

  const addToFavorites = (movie) => {
    setFavorites([...favorites, movie.id]);
  };
  const addTvToFavorites = (show) => {
    setTvFavorites([...tvFavorites, show.id]);
  };
  // We will use this function in a later section
  const removeFromFavorites = (movie) => {
    setFavorites(favorites.filter((mId) => mId !== movie.id));
  };

  const removeFromTvFavorites = (show) => {
    setTvFavorites(tvFavorites.filter((sId) => sId !== show.id));
  };

  const addReview = (movie, review) => {
    setMyReviews({ ...myReviews, [movie.id]: review });
  };

  const addToMustWatch = (movie) => {
    setMustWatch([...mustWatch, movie.id]);
    console.log(mustWatch);
  };

  const addStarRating = (movie, rating) => {
    setStarRatings([ ...myStarRatings, movie.id, rating ])
    console.log(myStarRatings);
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        tvFavorites,
        myStarRatings,
        addToFavorites,
        addTvToFavorites,
        removeFromFavorites,
        removeFromTvFavorites,
        addReview,
        addToMustWatch,
        addStarRating
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
