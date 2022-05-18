import React, { useEffect, useState } from 'react'
import axios from '../../helpers/axios';
import './Row.css'

const base_url = "http://image.tmdb.org/t/p/w185/"

function Row({tittle , fetchUrl , isLargeRow}) {
  const [movies , setMovies] = useState([]);

  useEffect( () => {
     async function fetchData(){
         const request = await axios.get(fetchUrl)
         setMovies(request.data.results)
         return request;
     }
     fetchData();
  },[fetchUrl])


  return (
    <div className='row'>
        <h2 style={{color:'#fff'}} >{tittle}</h2>
        <div className='row_posters'>
           {movies.map(movie => (
               <img src={`${base_url}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
               className= {`row-poster ${isLargeRow && "row_poster_large"}`} key={movie.id} alt={movie.title}  />
           ))}
        </div>
    </div>
  )
}

export default Row