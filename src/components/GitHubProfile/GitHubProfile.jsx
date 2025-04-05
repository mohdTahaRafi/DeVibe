import React, { useState } from 'react';
import { Search, Users, Star, GitFork } from 'lucide-react';
import { fetchGitHubUserDetails, fetchGitHubUserRepos } from '../../services/githubService';

function GitHub() {
  const [username, setUsername] = useState('');
  const [userDetails, setUserDetails] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState('');

  const handleFetchGitHubData = async () => {
    setError('');
    setUserDetails(null);
    setRepos([]);
    try {
      const userDetails = await fetchGitHubUserDetails(username);
      const userRepos = await fetchGitHubUserRepos(username);
      setUserDetails(userDetails);
      setRepos(userRepos);
    } catch (err) {
      setError('Please check GitHub username.');
    }
  };

  return (
    <div className="space-y-8 mb-8 mt-4 mx-4">
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">GitHub Profile</h1>
        <p className="text-gray-600">Enter a GitHub username to view their profile and repositories</p>
      </div>

      <div className="max-w-xl mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
        <button
          onClick={handleFetchGitHubData}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Get Profile
        </button>
      </div>

      {error && <p className="text-red-500 text-center">{error}</p>}

      {userDetails && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start space-x-4">
            <img
              src={userDetails.avatarUrl}
              alt="Profile"
              className="w-25 h-25 rounded-full object-cover object-center"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{userDetails.name}</h2>
              <p className="text-gray-600 mb-2">@{userDetails.username}</p>
              <p className="text-gray-700 mb-4">{userDetails.bio}</p>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <Users className="w-4 h-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-600">{userDetails.followers} followers</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-600">{userDetails.publicRepos} repositories</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {repos.map((repo) => (
          <div key={repo.name} className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{repo.name}</h3>
            <p className="text-gray-600 mb-4">{repo.description}</p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-500 mr-1" />
                <span className="text-sm text-gray-600">{repo.stars}</span>
              </div>
              <div className="flex items-center">
                <GitFork className="w-4 h-4 text-gray-500 mr-1" />
                <span className="text-sm text-gray-600">{repo.forks}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GitHub;