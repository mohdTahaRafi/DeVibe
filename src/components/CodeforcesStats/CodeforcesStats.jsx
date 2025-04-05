import React, { useState } from 'react';
import { Search, Trophy, Star, Award } from 'lucide-react';
import { fetchCodeforcesStats } from '../../services/codeforcesService';
import {ClipLoader} from 'react-spinners'

function Codeforces() {
  const [handle, setHandle] = useState('');
  const [stats, setStats] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true)

  const handleFetchStats = async () => {
    setError('');
    setStats(null);
    try {
      const data = await fetchCodeforcesStats(handle);
      setStats(data);
    } catch (err) {
      setError('Please check the handle, no profile found');
    }
  };

  return (
    <div className="space-y-8 mb-8 mt-4 mx-4">
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Codeforces Profile</h1>
        <p className="text-gray-600">Enter your Codeforces handle to view your statistics</p>
      </div>

      <div className="max-w-xl mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
            placeholder="Enter Codeforces handle"
            className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
        <button
          onClick={handleFetchStats}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          View Statistics
        </button>
      </div>

      {error && <p className="text-red-500 text-center">{error}</p>}

      {stats && (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Trophy className="w-6 h-6 text-yellow-500 mr-2" />
              <h3 className="text-lg font-semibold">Rating</h3>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stats.rating}</p>
            <p className="text-sm text-gray-500">{stats.rank}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Star className="w-6 h-6 text-blue-500 mr-2" />
              <h3 className="text-lg font-semibold">Problems Solved</h3>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stats.problemsSolved}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Award className="w-6 h-6 text-purple-500 mr-2" />
              <h3 className="text-lg font-semibold">Contests</h3>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stats.contestsCount}</p>
            <p className="text-sm text-gray-500">Best rank: #{stats.bestRank}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Codeforces;
