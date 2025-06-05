import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGPTSearch: false,
        gptRecommendedMovies : null,
        movieNames: null,
        title: null,
    },
    reducers: {
        toggleGptSearchView : (state, action) =>{
            state.showGPTSearch = !state.showGPTSearch

        },
        addGptMovies: (state, action) =>{
            const { movieNames, movieResults, title } = action.payload;
            state.gptRecommendedMovies = movieResults;
            state.movieNames = movieNames;
            state.title = title;
        }
    }

})


export const { toggleGptSearchView, addGptMovies } = gptSlice.actions;
export default gptSlice.reducer;