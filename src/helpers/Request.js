const APIkey = 'e2f279764c2f4f93e56c6459cb2978f8'

const requests = {
    fetchTrendings: `/trending/all/week?api_key=${APIkey}&lanugae=en-US`,
    fetchNetflixOriginals: `discover/tv?api_key=${APIkey}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${APIkey}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${APIkey}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${APIkey}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${APIkey}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${APIkey}&with_genres=10749`,
    fetchDocumanteries: `/discover/movie?api_key=${APIkey}&with_genres=99`,
}

export default requests;
