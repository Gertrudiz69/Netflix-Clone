const API_KEY = '5a162b1f9630967f806b55cf6932349c'

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=es-MX`,
  fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213&language=es-MX`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=es-MX`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchhorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;