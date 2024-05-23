import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGQzZWVkYTA2ZWQwMjYxNTU1ZmJmNTcxZWQ2NTIyNSIsInN1YiI6IjY2NGY0NmIyNWQ5NTBlNmQxMTE4ZDQxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9Ll62akz_yZF5Tndr1yPmAe3v7mahun9a3nllW5agSE'

const options = {
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
};

export const getTrendingMovies = async () => {
  const response = await axios(`/trending/movie/day?language=en-US`, options);
  return response.data.results;
};

export const getMovieDetails = async (id) => {
    const response = await axios(`/movie/${id}?language=en-US`, options);
  return response.data;
};

export const getMoviesByName = async (name) => {
    const response = await axios('/search/movie', {
    params: {
      query: name,
    },
    ...options,
  });
    return response.data.results;
};

export const getMovieCredits = async (id) => {
    const response = await axios(`/movie/${id}/credits?language=en-US`, options);
    return response.data.cast;
};

export const getMovieReviews = async (id) => {
    const response = await axios(`/movie/${id}/reviews?language=en-US`, options);
    return response.data.results;
};
