const API_KEY = '5a162b1f9630967f806b55cf6932349c'


const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=es-MX`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=es-MX`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=es-MX`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=es-MX`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=es-MX`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=es-MX`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=es-MX`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=es-MX`,
  fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_generes=12&language=es-MX`,
  fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_generes=16&language=es-MX`,
  fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&with_generes=80&language=es-MX`,
  fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_generes=18&language=es-MX`,
  fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_generes=10751&language=es-MX`,
  fetchFantasyMovies: `/discover/movie?api_key=${API_KEY}&with_generes=14&language=es-MX`,
  fetchHistoryMovies: `/discover/movie?api_key=${API_KEY}&with_generes=36&language=es-MX`,
  fetchMusicMovies: `/discover/movie?api_key=${API_KEY}&with_generes=10402&language=es-MX`,
  fetchMysteryMovies: `/discover/movie?api_key=${API_KEY}&with_generes=9648&language=es-MX`,
  fetchScienceFictionMovies: `/discover/movie?api_key=${API_KEY}&with_generes=878&language=es-MX`,
  fetchTVMovies: `/discover/movie?api_key=${API_KEY}&with_generes=10770&language=es-MX`,
  fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_generes=53&language=es-MX`,
  fetchWarMovies: `/discover/movie?api_key=${API_KEY}&with_generes=10752&language=es-MX`,
  fetchWesternMovies: `/discover/movie?api_key=${API_KEY}&with_generes=37&language=es-MX`,
  fetchGenereMovies: `/genre/movie/list?api_key=${API_KEY}&language=es-MX`,
  fetchByID : `?api_key=${API_KEY}&language=es-MX`
};

export default requests;
