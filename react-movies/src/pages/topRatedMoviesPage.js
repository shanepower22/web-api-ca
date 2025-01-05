import React, {useState} from "react";
import { getTopRatedMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import { Pagination } from "@mui/material";
import {Box} from "@mui/material";
const TopRatedMovies = (props) => {

  const [page, setPage] = useState(1);
  const {  data, error, isLoading, isError }  = useQuery(['toprated', {page}], getTopRatedMovies);

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

  const handlePageChange = (event, value) => {
    setPage(value); 
  };

  return (<Box>
    <PageTemplate
      title="Top Rated Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
    <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
    }}
  >
   <Pagination
          count="500" 
          page={page} 
          onChange={handlePageChange} 
          color="primary"
          size="large"
        /> 
  </Box>
  </Box>
);
};
export default TopRatedMovies;