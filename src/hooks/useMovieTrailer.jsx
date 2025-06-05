import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';

export const useMovieTrailer = (movieId) => {
        const dispatch = useDispatch();
        const mainMovieId = useSelector(store => store.movies.mainMovie)
        const id = mainMovieId ? mainMovieId.id : movieId
        const getMovies = async () => {
            const data = await fetch ('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US',API_OPTIONS);
            const json = await data.json();
            const filterData = json.results.filter((video)=> video.type === "Trailer");
            const trailer = filterData.length ? filterData[0] : json.results[0];
            console.log(trailer);
            dispatch(addTrailerVideo(trailer))
        }
    useEffect(()=>{
        getMovies();
    },[mainMovieId])
}