import React, { useState, useEffect } from 'react';
import { Calendar, ExternalLink } from 'lucide-react';
import fetchNews from '../../services/newsService';
import {format} from 'date-fns'

function News() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        const news = await fetchNews();
        setArticles(news);
      } catch (err) {
        setError('Failed to fetch news. Please try again later.');
        console.error(err);
      }
    };

    fetchLatestNews();
  }, []);

  return (
    <div className="space-y-8 mb-8 mt-4 mx-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Tech News</h1>
        <p className="text-gray-600">Stay updated with the latest in tech</p>
      </div>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="space-y-6">
        {articles.map((article) => (
          <article
            key={article.url}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:w-48"
                  src={article.urlToImage || 'https://via.placeholder.com/150'}
                  alt={article.title}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="font-medium text-indigo-600">{article.source.name}</span>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {format(new Date(article.publishedAt), 'dd MMM yyyy')}
                  </div>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
                >
                  Read more
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default News;