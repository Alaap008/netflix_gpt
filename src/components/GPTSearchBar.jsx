import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import client from "../utils/openAI"
import { API_OPTIONS } from '../utils/constants'
import { addGptMovies } from '../utils/gptSlice'

const GPTSearchBar = () => {
const dispatch = useDispatch();
const selectedLang = useSelector((store)=> store.config);
const searchTerm = useRef(null);

const getMovies = async(movie) =>{
    const data = await fetch ('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',API_OPTIONS);
    const json = await data.json();
    return json.results;
}

const handleGPTSearchClick = async () =>{
const gptQuery =
    "Act as a Movie Recommendation system and suggest some movies for the query : " +
    searchTerm.current.value +
    ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const results = await client.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
        { role: 'user', content: gptQuery },
    ],
});
    const movieList = results?.choices[0]?.message?.content.split(",");
    const moviePromise = movieList.map((movie)=>(
        getMovies(movie)
    ))
    const movieArray = await Promise.all(moviePromise);
    dispatch(addGptMovies({movieNames : movieArray.flat() , movieResults : movieList, title :  searchTerm.current.value }))
}
  return (
    <div className='pt-[10%] flex justify-center'>
    <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=> e.preventDefault()} >
        <input type='text' ref={searchTerm} className='p-4 m-4 col-span-9 bg-white text-black' placeholder={lang[selectedLang.lang].gptSearchPlaceholder}></input>
        <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg' onClick={handleGPTSearchClick}> {lang[selectedLang.lang].search} </button>
    </form>
    </div>
  )
}

export default GPTSearchBar
