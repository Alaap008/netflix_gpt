import React from 'react'
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
import withErrorBoundary from './withErrorBoundary'

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {showGPTSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default withErrorBoundary(Browse, 'Browse');
