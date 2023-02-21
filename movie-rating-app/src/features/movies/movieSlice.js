import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=movie`
    );
    return response.data;
  }
);
export const fetchAsyncSeries = createAsyncThunk(
  "movies/fetchAsyncSeries",
  async (term) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=series`
    );
    return response.data;
  }
);
export const fetchAsyncMovieOrSeriesDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrSeriesDetail",
  async (id) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&i=${id}&Plot=full`
    );
    return response.data;
  }
);

const initialState = {
  movies: {},
  series:{},
  selectedMovieOrDetail: {},
  fetchMovieLoader: false,
  fetchSeriesLoader: false,
  fetchMovieOrSeriesLoader: false
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrSeries: (state)=>{
      state.selectedMovieOrDetail = {};
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncMovies.pending, (state) => {
      return {...state, fetchMovieLoader: true}
    })
    builder.addCase(fetchAsyncMovies.fulfilled, (state, {payload}) => {
      return { ...state, movies: payload,fetchMovieLoader:false };
    })
    builder.addCase(fetchAsyncMovies.rejected,(state) => {
      console.log("Rejected !")
      return {...state, fetchMovieLoader: false}
    })
    builder.addCase(fetchAsyncSeries.pending, (state) => {
      return {...state, fetchSeriesLoader: true}
    })
    builder.addCase(fetchAsyncSeries.fulfilled, (state, {payload}) => {
      return { ...state, series: payload , fetchSeriesLoader: false};
    })
    builder.addCase(fetchAsyncSeries.rejected,(state) => {
      console.log("Rejected !")
      return {...state, fetchSeriesLoader: false}
    })
    builder.addCase(fetchAsyncMovieOrSeriesDetail.pending, (state) => {
      return {...state, fetchMovieOrSeriesLoader: true}
    })
    builder.addCase(fetchAsyncMovieOrSeriesDetail.fulfilled, (state, {payload}) => {
      return { ...state, selectedMovieOrDetail: payload , fetchMovieOrSeriesLoader: false};
    })
    builder.addCase(fetchAsyncMovieOrSeriesDetail.rejected,(state) => {
      console.log("Rejected !")
      return {...state, fetchMovieOrSeriesLoader: false}
    })
  },
});

export const { removeSelectedMovieOrSeries } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export const getSelectedMovieOrSeriesDetail = (state) => state.movies.selectedMovieOrDetail;
export const getMovieLoader = (state) => state.movies.fetchMovieLoader;
export const getSeriesLoader = (state) => state.movies.fetchSeriesLoader;
export const getMovieOrSeriesDetailLoader = (state) => state.movies.fetchSeriesLoader;
export default movieSlice.reducer;