import React, { useState } from 'react';
import { Search, Star, Clock, Film } from 'lucide-react';
import fetchMovieDetails from '../../services/moviesService'

function Movies() {
  const [search, setSearch] = useState('');
  const [movieData, setMovieData] = useState(null)
  const [error, setError] = useState('')

    const getMovieData = async () => {
      setError('')
      setMovieData(null)
        try {
          const movieDetails = await fetchMovieDetails(search);
          setMovieData(movieDetails);
        } catch (error) {
          setError('Movie not found, please check movie name.')
        }
      }

  return (
    <div className="space-y-8 mx-3 mb-8 mt-4">
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Movies</h1>
        <p className="text-gray-600">Discover and track your favorite movies</p>
      </div>

      <div className="max-w-xl mx-auto">
        <div className="relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search movies..."
            className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <button
          onClick={getMovieData}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          View Movies
        </button>
      </div>

      { error && <p className="text-red-500 text-center">{error}</p>}

      {movieData && (
        <div className="flex justify-center items-center">
          <div key={movieData.Title} className="bg-white rounded-lg shadow-sm overflow-hidden w-120">
            <img
              src={movieData.Poster}
              alt={movieData.Title}
              className="w-full h-64 object-cover "
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {movieData.Title}
              </h2>
              <div className="flex items-center space-x-4 mb-3">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                  <span className="text-sm text-gray-600">{movieData.imdbRating}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-600">{movieData.Runtime}</span>
                </div>
                <div className="flex items-center">
                  <Film className="w-4 h-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-600">{movieData.Year}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">{movieData.Genre}</p>
              <p className="text-gray-600 text-sm">{movieData.Plot}</p>
            </div>
          </div>
      </div>
      )}
    </div>
  );
}

export default Movies;