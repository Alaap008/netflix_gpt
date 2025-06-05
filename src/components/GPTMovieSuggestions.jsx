import React from 'react'
import MovieList from './MovieList'
import { useSelector, useStore } from 'react-redux'

const GPTMovieSuggestions = () => {
    const { gptRecommendedMovies , movieNames , title } = useSelector(store => store.gpt)
    if (!movieNames) return null;

    return (
        <div className="p-4 m-4 bg-black text-white">
        <div>
                <MovieList
                    title = {title}
                    movies={movieNames}
                >
                </MovieList>
        </div>
        
        </div>
    )
}

export default GPTMovieSuggestions
