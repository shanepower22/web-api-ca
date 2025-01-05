import React, {useState, useEffect}  from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const formControl = 
  {
    margin: 1,
    minWidth: "90%",
    backgroundColor: "rgb(255, 255, 255)"
  };

export default function SortMoviesCard({onSortChange, sortInfo}) {
  
  const [sortOption, setSortOption] = useState(sortInfo || "popularity.desc");    
 

  const handleSortChange = (e) => {
    e.preventDefault(); 
    
    setSortOption(e.target.value);
    onSortChange(e.target.value);
  };
  
    return (
    <Card
      sx={{
        backgroundColor: "rgb(153, 153, 255)",
        height: 200,
      }}
      variant="outlined"
    >
      <CardContent>
        <Typography variant="h6" component="h1">
          Sort Movies
        </Typography>
        <FormControl sx={{ ...formControl }} key={sortOption}>
          <Select
            id="sort-select"
            value={sortOption}
            onChange={handleSortChange}
          >
            <MenuItem value="popularity.desc">Most Popular</MenuItem>
            <MenuItem value="popularity.asc">Least Popular</MenuItem>
            <MenuItem value="vote_average.desc">Highest Rated</MenuItem>
            <MenuItem value="vote_average.asc">Lowest Rated</MenuItem>
            <MenuItem value="release_date.desc">Newest Releases</MenuItem>
            <MenuItem value="release_date.asc">Oldest Releases</MenuItem>
            <MenuItem value="original_title.asc">Title (A-Z)</MenuItem>
            <MenuItem value="original_title.desc">Title (Z-A)</MenuItem>

          </Select>
        </FormControl>
      </CardContent>
    </Card>
  );
}