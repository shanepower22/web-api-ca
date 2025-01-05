import React, { useState } from "react";
import { getTrendingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import PlaylistAddIcon from "../components/cardIcons/playlistAdd";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { Pagination } from "@mui/material";
import {Box} from "@mui/material";

const TrendingMovies = (props) => {

  const [page, setPage] = useState(1);
  const [time_window, setTimeWindow] = useState("day");
  const {  data, error, isLoading, isError }  = useQuery
    (["trendingMovies", { time_window }, {page}], getTrendingMovies)
  

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
  return (
    <>
      <ButtonGroup sx={{display: "flex", justifyContent: "center", alignItems: "center"}} variant="outlined">
        <Button
          onClick={() => setTimeWindow("day")}
          variant={time_window === "day" ? "contained" : "outlined"}
        >
          Day
        </Button>
        <Button
          onClick={() => setTimeWindow("week")}
          variant={time_window === "week" ? "contained" : "outlined"}
        >
          Week
        </Button>
      </ButtonGroup>
      <Box>
      <PageTemplate
        title={`Trending Movies (${time_window})`}
        movies={movies}
        action={(movie) => (
          <>
            <AddToFavoritesIcon movie={movie} />
            <PlaylistAddIcon movie={movie} />
          </>
        )}
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
    </>
);
};
export default TrendingMovies;