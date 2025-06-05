import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { LOGO_URL } from '../utils/constants'

const GPTSearch = () => {
  return (
    <div>
    <div className="absolute -z-10">
        <img src={LOGO_URL} className="logo react" alt="React logo" />
    </div>
      <GPTSearchBar></GPTSearchBar>
      <GPTMovieSuggestions></GPTMovieSuggestions>
    </div>
  )
}

export default GPTSearch
