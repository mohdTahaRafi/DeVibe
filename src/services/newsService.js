import axios from 'axios';
import chalk from 'chalk'

const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines';

const fetchNews = async (country = 'us') => {
  try {
    const response = await axios.get(NEWS_API_URL, {
      params: {
        country: country,
        category: 'technology',
        apiKey: import.meta.env.VITE_NEWSAPI_KEY,
      },
    });
    console.log(chalk.green('News Data Fetched'));
    return response.data.articles;
  } catch (error) {
    console.log(chalk.red('Error Fetching News Data'));
    console.error('Error fetching news:', error);
    throw error;
  }
};

export default fetchNews;
