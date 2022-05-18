import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Banner from '../../Components/Banner/Banner'
import Nav from '../../Components/Nav/Nav'
import Row from '../../Components/Row/Row'
import requests from '../../helpers/Request'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../Firebase-config'

function Home() {

  const navigate = useNavigate();

  useEffect(() => {
       const unsubScribe = onAuthStateChanged(auth , (authUser) => {
          if(authUser){
            navigate("/")
            console.log(authUser)
          }else{
            console.log("No User")
            navigate("/Login")
          }
       })

   return unsubScribe;
       
  } , [])

  return (
    <div className='Homescreen'>
        {/* nav bar */}
        <Nav />

        {/* Banner bar */}
        <Banner />

      <Row tittle="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row tittle="Trending Now" fetchUrl={requests.fetchTrendings} />
      <Row tittle="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row tittle="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row tittle="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row tittle="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row tittle="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row tittle="Documateries" fetchUrl={requests.fetchDocumanteries} />
    </div>
  )
}

export default Home