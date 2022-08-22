const API_KEY = "a1394d668306ef17c9da713709f1bdc4";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&withgenres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&withgenres=35`,
  fetchHorroMovies: `/discover/movie?api_key=${API_KEY}&withgenres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&withgenres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&withgenres=99`,
};

export default requests;
