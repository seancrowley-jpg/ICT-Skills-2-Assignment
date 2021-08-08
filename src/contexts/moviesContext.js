import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [mustWatch, setMustWatch] = useState([]);

  const addToFavorites = (movie) => {
    setFavorites([...favorites, movie.id]);
  };
  const addTvToFavorites = (show) => {
    setFavorites([...favorites, show.id]);
  };
  // We will use this function in a later section
  const removeFromFavorites = (movie) => {
    setFavorites(favorites.filter((mId) => mId !== movie.id));
  };

  const addReview = (movie, review) => {
    setMyReviews({ ...myReviews, [movie.id]: review });
  };

  const addToMustWatch = (movie) => {
    setMustWatch([...mustWatch, movie.id]);
    console.log(mustWatch);
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        addTvToFavorites,
        removeFromFavorites,
        addReview,
        addToMustWatch,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
