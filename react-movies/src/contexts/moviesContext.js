import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 
  const [mustWatchMovies, setMustWatch] = useState( [] )
  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };
  
  console.log(mustWatchMovies)

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  //console.log(myReviews);

  const addToMustWatch = (movie) => {
    let newMustWatch = [];
    if (!mustWatchMovies.includes(movie.id)){
      newMustWatch= [...mustWatchMovies, movie.id];
    }
    else{
      newMustWatch = [...mustWatchMovies];
    }
    setMustWatch(newMustWatch)
  };

  console.log(mustWatchMovies)

  const removeFromMustWatch = (movie) => {
    setMustWatch( mustWatchMovies.filter(
      (mId) => mId !== movie.id
    ) )
  };

  // We will use this function in the next step
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

   return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        mustWatchMovies,
        addToMustWatch,
        removeFromMustWatch
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;