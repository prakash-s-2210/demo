import React from "react";
import Loader from '../loader/Loader';
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { 
  getAllMovies , 
  getAllSeries, 
  getMovieLoader, 
  getSeriesLoader
} from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import {settings} from '../../common/settings';
import "./MovieListing.scss";
const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);
  const movieLoader = useSelector(getMovieLoader);
  const seriesLoader = useSelector(getSeriesLoader);
  let renderMovies, renderSeries = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );
    renderSeries =
    series.Response === "True" ? (
      series.Search.map((series, index) => (
        <MovieCard key={index} data={series} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{series.Error}</h3>
      </div>
      
    );
  
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        {movieLoader === false ? 
        <div className="movie-container">
          <Slider {...settings}>{renderMovies}</Slider>
        </div>
        :
        <Loader/>
        }
      </div>
      <div className="series-list">
        <h2>Series</h2>
        {seriesLoader === false ?
        <div className="movie-container">
          <Slider {...settings}>{renderSeries}</Slider>
        </div>
        :
        <Loader/>
        }
      </div>
    </div>
  );
};

export default MovieListing;