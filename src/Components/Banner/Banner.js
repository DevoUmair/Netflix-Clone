import axios from '../../helpers/axios'
import requests from '../../helpers/Request'
import React, { useEffect, useState } from 'react'
import './Banner.css'

function Banner() {
  const [movie , setMovie] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals)

      setMovie(request.data.results[Math.floor(Math.random() *  request.data.results.length - 1 )])

      return request;
    }
    fetchData();
  },[])

  function truncate(str , n){
    return str?.length > n ? str.substr(0,n-1) + "..." : str;
}

  return (
    <header className='banner'
      style={{
          backgroundSize:"cover",
          backgroundImage:`url("http://image.tmdb.org/t/p/w185/${movie?.backdrop_path}")`,
          backgroundPosition:"center center"
      }}
    >
      <div className='banner_content'>
           <h1 className='banner_tittle'>
               {movie?.tittle || movie?.name || movie?.original_name}
           </h1>
           <div>
               <button className='banner_button'>Play</button>
               <button className='banner_button'>My List</button>
           </div>
           <h1 className='movie_description'>
               {truncate(movie?.overview , 150)}
           </h1>
      </div>
      <div className='fade-bottom'>
               
    </div>
    </header>
  )
}

export default Banner