import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
export const useNowPlayingMovies = () => {
const dispatch = useDispatch()
const nowPlayingMovies = useSelector((store)=> store.movies.nowPlayingMovies)
const getNowPlayingMovie = async () =>{
    const data = await fetch ("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", API_OPTIONS )
    const json = await data.json();
    dispatch( addNowPlayingMovies(json.results) )
  }
  useEffect(()=>{
    !nowPlayingMovies && getNowPlayingMovie();
  },[])
}