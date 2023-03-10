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
  fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12&language=es-MX`,
  fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16&language=es-MX`,
  fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80&language=es-MX`,
  fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18&language=es-MX`,
  fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751&language=es-MX`,
  fetchFantasyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=14&language=es-MX`,
  fetchHistoryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=36&language=es-MX`,
  fetchMusicMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10402&language=es-MX`,
  fetchMysteryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9648&language=es-MX`,
  fetchScienceFictionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878&language=es-MX`,
  fetchTVMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10770&language=es-MX`,
  fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53&language=es-MX`,
  fetchWarMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10752&language=es-MX`,
  fetchWesternMovies: `/discover/movie?api_key=${API_KEY}&with_genres=37&language=es-MX`,
  fetchGenereMovies: `/genre/movie/list?api_key=${API_KEY}&language=es-MX`,
  fetchGenereSerie: `/genre/tv/list?api_key=${API_KEY}&language=es-MX`,
  fetchActionTv: `/discover/tv?api_key=${API_KEY}&with_genres=10759&language=es-MX`,
  fetchAnimationTv: `/discover/tv?api_key=${API_KEY}&with_genres=16&language=es-MX`,
  fetchComedyTv: `/discover/tv?api_key=${API_KEY}&with_genres=35&language=es-MX`,
  fetchCrimeTv: `/discover/tv?api_key=${API_KEY}&with_genres=80&language=es-MX`,
  fetchDocumentariesTv: `/discover/tv?api_key=${API_KEY}&with_genres=99&language=es-MX`,
  fetchDramaTv: `/discover/tv?api_key=${API_KEY}&with_genres=18&language=es-MX`,
  fetchFamilyTv: `/discover/tv?api_key=${API_KEY}&with_genres=10751language=es-MX`,
  fetchKidsTv: `/discover/tv?api_key=${API_KEY}&with_genres=10762&language=es-MX`,
  fetchMysteryTv: `/discover/tv?api_key=${API_KEY}&with_genres=9648&language=es-MX`,
  fetchNewsTv: `/discover/tv?api_key=${API_KEY}&with_genres=10763&language=es-MX`,
  fetchRealityTv: `/discover/tv?api_key=${API_KEY}&with_genres=10764&language=es-MX`,
  fetchSciFiTv: `/discover/tv?api_key=${API_KEY}&with_genres=10765&language=es-MX`,
  fetchSoapTv: `/discover/tv?api_key=${API_KEY}&with_genres=10766&language=es-MX`,
  fetchTalkTv: `/discover/tv?api_key=${API_KEY}&with_genres=10767&language=es-MX`,
  fetchWarTv: `/discover/tv?api_key=${API_KEY}&with_genres=10768&language=es-MX`,
  fetchWesternTv: `/discover/tv?api_key=${API_KEY}&with_genres=37&language=es-MX`,
  fetchProyects: `/combined_credits?api_key=${API_KEY}&language=es-MX`,
  fetchByID : `?api_key=${API_KEY}`,
  fetchCast: `/credits?api_key=${API_KEY}&language=es-MX`,
  fetchSearch: `/search/multi?api_key=${API_KEY}&language=es-MX&include_adult=false`,
  fetchRecomended: `/recommendations?api_key=${API_KEY}&language=es-MX&page=1`,
  fetchTrailer: `/videos?api_key=${API_KEY}`
};

export default requests;
