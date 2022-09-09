const API_KEY = "b017501620c4157d9b561de9e0e411f9"


const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&lenguage=en-US`,
    fetchNetlixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&lenguage=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,    
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`

}

export default requests
