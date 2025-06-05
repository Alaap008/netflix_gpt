import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants'
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import { usePopularMovies } from '../hooks/usePopularMovies'
import { useUpcomingMovies } from '../hooks/useUpcomingMovies'
import { useTopRatedMovies } from '../hooks/useTopRatedMovies'
import GPTSearch from './GPTSearch'
import { useSelector } from 'react-redux'

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  const showGPTSearch = useSelector(store => store.gpt.showGPTSearch);
  return (
    <div>
        <Header />
        {
          showGPTSearch ? (
            <GPTSearch />
          ) : (
            <>
            <MainContainer />
            <SecondaryContainer />
            </>
          )
        }
    </div>
    )
}

export default Browse
