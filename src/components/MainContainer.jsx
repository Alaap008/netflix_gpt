import React from 'react'
import { useSelector, useStore } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { original } from '../../node_modules/immer/src/utils/common';

const MainContainer = () => {
  const movies = useSelector(store => store?.movies?.nowPlayingMovies)
  const mainMovie = useSelector(store => store?.movies?.mainMovie)
  if (movies == null) return;
  //const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie ? mainMovie : movies[0];
  return (
    <div>
    <VideoTitle title={original_title} overview={overview} />
    <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer
