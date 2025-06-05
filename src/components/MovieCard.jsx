import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard= ({posterPath, onClick}) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-4" onClick={onClick} >
      <img alt="Movie Card" className='cursor-pointer'  src={IMG_CDN_URL + posterPath} />
    </div>
  )
}

export default MovieCard;
