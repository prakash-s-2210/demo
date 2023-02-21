import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";

import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../../features/movies/movieSlice";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const movieText = "Harry";
    const seriesText = "Friends";
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncSeries(seriesText));
  }, [dispatch]);
  return (
    <div>
      {/* <div className="banner-img"></div> */}
      <MovieListing />
    </div>
  );
};

export default Home;