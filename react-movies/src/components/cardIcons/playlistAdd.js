import React, { useContext } from "react";
import AddToPlaylistIcon from "@mui/icons-material/PlaylistAdd";
import IconButton from "@mui/material/IconButton";
import { MoviesContext } from "../../contexts/moviesContext";

const PlaylistAddIcon = ({ movie }) => {
const context = useContext(MoviesContext);

  const handleAddToMustWatch = (e) => {
    e.preventDefault();
    context.addToMustWatch(movie);
  };
    return (
        <IconButton aria-label="add to playlist" onClick={handleAddToMustWatch}>
          <AddToPlaylistIcon color="primary" fontSize="large" />
        </IconButton>
      );
};

export default PlaylistAddIcon;