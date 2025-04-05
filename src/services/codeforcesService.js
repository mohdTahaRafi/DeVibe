import axios from 'axios';
import chalk from 'chalk';

const CODEFORCES_API_URL = 'https://codeforces.com/api';

export const fetchCodeforcesStats = async (handle) => {
  try {
    
    const userInfoResponse = await axios.get(`${CODEFORCES_API_URL}/user.info`, {
      params: { handles: handle },
    });
    const userInfo = userInfoResponse.data.result[0];
    const rating = userInfo.rating || 'Unrated';
    const rank = userInfo.rank || 'Unranked';

    const userStatusResponse = await axios.get(`${CODEFORCES_API_URL}/user.status`, {
      params: { handle },
    });
    const submissions = userStatusResponse.data.result;
    const solvedProblems = new Set();
    submissions.forEach((submission) => {
      if (submission.verdict === 'OK' && submission.problem) {
        solvedProblems.add(`${submission.problem.contestId}-${submission.problem.index}`);
      }
    });
    const problemsSolved = solvedProblems.size;

    const userRatingResponse = await axios.get(`${CODEFORCES_API_URL}/user.rating`, {
      params: { handle },
    });
    const contests = userRatingResponse.data.result;
    const contestsCount = contests.length;

    let bestRank = Infinity;
    contests.forEach((contest) => {
      if (contest.rank < bestRank) {
        bestRank = contest.rank;
      }
    });
    bestRank = bestRank === Infinity ? 'Unrated' : bestRank;

    return { rating, rank, problemsSolved, contestsCount, bestRank };
  } catch (error) {
    console.error('Error fetching Codeforces stats:', error);
    throw error;
  }
};
