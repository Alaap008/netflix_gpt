import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  return (
    movies.nowPlayingMovies && (
    <div className="bg-black">
      <div className="-mt-52 pl-12 relative z-20">
        { movies.nowPlayingMovies &&  <MovieList title={'Now Playing Movies'} movies={movies.nowPlayingMovies} ></MovieList> }
        { movies.popularMovies && <MovieList title={'Popular Movies'} movies={movies.popularMovies} ></MovieList> }
        { movies.topRatedMovies && <MovieList title={'Top Rated Movies'} movies={movies.topRatedMovies} ></MovieList> }
        { movies.upcomingMovies && <MovieList title={'Upcoming'} movies={movies.upcomingMovies} ></MovieList> }
      </div>
    </div>
    )
  )
}

export default SecondaryContainer
