# Assignment 2 - Web API.

Name: Shane Power


## Features.


 + Added endpoints for fetching from TMDB, such as Trending Movies, Upcoming Movies etc.
 + Added endpoint to fetch Now Playing movies from TMDB


## Setup requirements.

1. [Node.js](https://nodejs.org/en/) and [MongoDB](https://www.mongodb.com) must be installed.
2. Clone repository using 'git clone https://github.com/shanepower22/web-api-ca'
3. Navigate to react-movies directory in terminal, and run 'npm install' followed by 'npm start'. The app should run on http://localhost:3000.
4. Create a .env file in the react-movies directory.
4. Navigate to movies-api folder in terminal, and run 'npm install'.
5. Create a .env file in the movies-api directory.

## API Configuration

1. Copy the following into the .env file in the react-movies directory, replacing the REACT_APP_TMDB_KEY with your API key.
```
REACT_APP_TMDB_KEY=your_key
```

2. Copy the following into the .env file in the react-movies directory, replacing the TMDB_KEY with your API key, and MONGO_DB with your Mongo DB cluster link.
```
NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB=your_mongodb_link
TMDB_KEY=your_key
SECRET=your_secret
```

## API Design

- /api/movies/nowplaying | GET | Gets movies playing in theatres
- /api/movies/trending | GET | Gets trending movies
- /api/movies/discover | GET | Gets homepage of movies
- /api/movies/upcoming | POST | Gets upcoming movies
- /api/movies/genres | POST | Gets list of movie genres
- /api/movies/toprated | POST | Gets top rated movies


## Security and Authentication

- Authentication is done through JWT, users are given a token upon login. 
- Parts of webpage are hidden when user is not logged in.
- Passwords are encrypted using bcrypt before being stored.
- Passwords are required to be 8 characters, with one letter, one digit, and one special character

## Integrating with React App

The main movie lists are now routed through the Web API instead of directly through TMDB. These are
+ Now Playing tab
+ Trending tab
+ Discover tab
+ Upcoming tab
+ Genres tab
+ Top Rated tab

- A list of Watch Providers can now be seen in a movie's details. This shows the streaming services that offer the movie. 
- The Now Playing tab shows movies currently playing in theatres
- When a user is not logged in, the Favourites and Must Watch List tabs are not available, and the buttons to add movies to these lists are also missing. Once the user logs in, these features can be used

