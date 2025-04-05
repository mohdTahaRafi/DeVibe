import axios from "axios";
import chalk from 'chalk'

const OMDB_API_URL = "http://www.omdbapi.com/";

const fetchMovieDetails = async (title) => {
  try {
    const response = await axios.get(OMDB_API_URL, {
      params: {
        apikey: import.meta.env.VITE_OMDB_API_KEY,
        t: title,
      },
    });

    if(response.data.Response=='True') {

      console.log(chalk.green('Movie Data Fetched'));
      
      return {
        Title: response.data.Title,
        Year: response.data.Year,
        Runtime: response.data.Runtime,
        Genre: response.data.Genre,
        imdbRating: response.data.imdbRating,
        Plot: response.data.imdbRating,
        Poster: response.data.Poster,
      };
    } else {
      console.log(chalk.red('Error Fetching Movie Data'));
      throw new Error('Movie not found');
    }
  } catch (error) {
    console.log(chalk.red('Error Fetching Movie Data'));
    console.error("Error fetching movie details:", error);
    throw error;
  }
};

export default fetchMovieDetails