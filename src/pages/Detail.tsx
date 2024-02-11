import React, {useState} from 'react';
import './Detail.css';
import image from '../assets/img/3.jpg';
const Detail: React.FC = () => {

    return(
        <div className='bloc'>
            <div className='titre'>
                <h1>Details</h1>
            </div>

        <div className='img-detail'>
          <img src={image} alt="" />
          <div className='detail'>
            <p>Longitude : -457800 Km</p> 
          </div>

          <div className='latitude'>
             <p>Latitude : -487025 Km</p>
          </div>
          <div className='locale'>
            <p>Antananarivo</p>
          </div>
        </div>
      
        <div className='local'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
          </svg>
        </div>
      </div>
      

     
    );
};
export default Detail;

