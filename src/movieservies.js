const tmdbkey = process.env.REACT_APP_TMDB_API_KEY  

const endpoints = {
    popular: `https://api.themoviedb.org/3/movie/popular?api_key=${tmdbkey}&language=en-US&page=1`,
    Latest:   `https://api.themoviedb.org/3/tv/popular?api_key=${tmdbkey}&language=en-US&page=1`,
    top_rated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${tmdbkey}&language=en-US&page=1`,
    upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${tmdbkey}&language=en-US&page=1`,
    Trending : ` https://api.themoviedb.org/3/movie/now_playing?api_key=${tmdbkey}&language=en-US&page=1`
  };

export default endpoints


    