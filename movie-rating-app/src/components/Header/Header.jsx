import React, {useState} from "react";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux';
import user from "../../images/user.png";
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Header.scss";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../../features/movies/movieSlice";

const Header = () => {
  // const notify = () => toast.error("Please enter movie or series name",{
  //   position: toast.POSITION.TOP_CENTER
  // });
  const dispatch = useDispatch();  
  const [ term, setTerm ] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();   
    
      dispatch(fetchAsyncMovies(term));
      dispatch(fetchAsyncSeries(term));
      setTerm("");
  }
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movie App</Link>
        {/* <ToastContainer /> */}
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input type="text" required value = {term} placeholder="Search Movies or Series" onChange={(e) => {setTerm(e.target.value)}}/>
          <button type="submit"><i className="fa fa-search"></i></button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;