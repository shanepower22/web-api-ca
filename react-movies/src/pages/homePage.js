import React, {useState} from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import { Pagination } from "@mui/material";
import {Box} from "@mui/material";

const HomePage = () => {

  const [page, setPage] = useState(1);
  const [sortInfo, setSortInfo] = useState("popularity.desc"); // default to most popular
  const {  data, error, isLoading, isError }  = useQuery(['discover', { page, sortOption: sortInfo }], getMovies);

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
 const movies = data?.results || [];

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  const handlePageChange = (event, value) => {
    setPage(value); 
  };

  const handleSortInfoChange = (newSortInfo) => {
    setSortInfo(newSortInfo);
    console.log(newSortInfo)
  };

  return (<Box>
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      
      action={(movie) => <AddToFavoritesIcon movie={movie} />}
      onSortChange={handleSortInfoChange}
      sortInfo={sortInfo}
  
      
    /><Box
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
export default HomePage;