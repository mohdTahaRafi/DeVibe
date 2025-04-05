import axios from 'axios';
import chalk from 'chalk'

const GITHUB_API_URL = 'https://api.github.com';

export const fetchGitHubUserDetails = async (username) => {
  try {
    
    const userResponse = await axios.get(`${GITHUB_API_URL}/users/${username}`);
    const user = userResponse.data;

    console.log(chalk.green('GitHub User Data Fetched'));

    return {
      avatarUrl: user.avatar_url || 'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg',
      name: user.name || 'No username available',
      username: user.login,
      bio: user.bio || 'No bio available',
      followers: user.followers || 0,
      publicRepos: user.public_repos || 0,
    };
  } catch (error) {
    console.log(chalk.red('Error fetching GitHub User Data'));
    console.error('Error fetching GitHub user details:', error);
    throw error;
  }
};

export const fetchGitHubUserRepos = async (username) => {
  try {
    
    const reposResponse = await axios.get(`${GITHUB_API_URL}/users/${username}/repos`, {
      params: { sort: 'updated', per_page: username.public_repos },
    });
    console.log(chalk.green('GitHub Repo Data Fetched'));
    return reposResponse.data.map((repo) => ({
      name: repo.name || '(No name available)',
      description: repo.description || 'No description available',
      stars: repo.stargazers_count,
      forks: repo.forks_count,
    }));
  } catch (error) {
    console.log(chalk.red('Error fetching GitHub Repo Data'));
    console.error('Error fetching GitHub repositories:', error);
    throw error;
  }
};
