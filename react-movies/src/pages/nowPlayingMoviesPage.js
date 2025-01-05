import React, { useContext } from "react";
import { getNowPlayingMovies,  } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import PlaylistAddIcon from "../components/cardIcons/playlistAdd";
import { AuthContext } from "../contexts/authContext";

const NowPlayingMoviesPage = (props) => {
  const context = useContext(AuthContext);

  const {  data, error, isLoading, isError }  = useQuery('nowplaying', getNowPlayingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title="Now Playing Movies"
      movies={movies}
      action={(movie) => (
        <>
          {context.isAuthenticated && (
            <>
              <AddToFavoritesIcon movie={movie} />
              <PlaylistAddIcon movie={movie} />
            </>
          )}
        </>
      )}
    />
);
};
export default NowPlayingMoviesPage;