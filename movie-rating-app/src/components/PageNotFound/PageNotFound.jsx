import React from 'react';
import pnf from '../../images/pnf.jpg';
import '../PageNotFound/PageNotFound.scss';

const PageNotFound = () => {
  return (
    <div className='page-not-found-container'>
        <img className='page-not-found-img' src = {pnf} alt="page not found page" />
    </div>
  )
}

export default PageNotFound