import React from 'react';
import FadeLoader from "react-spinners/FadeLoader";
import '../../components/loader/FadeLoader.scss';

const Loader = () => {
  return (
    <div className='loader-section'>
      <FadeLoader
        color={'orange'}
        // loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
  )
}
export default Loader;
