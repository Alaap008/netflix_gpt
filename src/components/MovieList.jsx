import React from 'react'
import MovieCard from './MovieCard'
import { useDispatch } from 'react-redux'
import { addMainMovie } from '../utils/movieSlice';

const MovieList = ({title, movies}) => {
  const dispatch = useDispatch();
  return (
    <div className="px-6">
        <h1 className="text-3xl py-4 text-white">{title}</h1>
            <div className="flex overflow-x-scroll">
                <div className="flex">
                {
                    movies.map((movie)=>(
                        <MovieCard key={movie.id} posterPath={movie.poster_path} onClick={()=>dispatch(addMainMovie(movie))} ></MovieCard>
                    ))
                }
                </div>   
            </div>
    </div>
  )
}

export default MovieList
