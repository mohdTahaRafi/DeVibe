import React from 'react';
import { ArrowRight, Code2, Github, Cloud, Newspaper, Film } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function Home() {
  const cards = [
    {
      title: 'Codeforces Stats',
      icon: Code2,
      description: 'Track your competitive programming progress',
      route: '/codeforces',
      color: 'bg-blue-500',
    },
    {
      title: 'GitHub Activity',
      icon: Github,
      description: 'View your GitHub profile and repositories',
      route: '/github',
      color: 'bg-purple-500',
    },
    {
      title: 'Weather Updates',
      icon: Cloud,
      description: 'Check current weather conditions',
      route: '/weather',
      color: 'bg-green-500',
    },
    {
      title: 'Tech News',
      icon: Newspaper,
      description: 'Stay updated with latest tech news',
      route: '/news',
      color: 'bg-orange-500',
    },
    {
      title: 'Movies',
      icon: Film,
      description: 'Discover and track your favorite movies',
      route: '/movies',
      color: 'bg-red-500',
    },
  ];

  return (
    <div className="mb-8 mt-4 mx-4 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to DeVibe Dashboard
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your all-in-one developer dashboard for tracking competitive programming,
          GitHub activity, weather updates, tech news, and favorite movies.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {cards.map((card) => (
          <NavLink
            key={card.title}
            to={card.route}
            className="group block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div
              className={`${card.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
            >
              <card.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-600 mb-4">{card.description}</p>
            <div className="flex items-center text-gray-500 group-hover:text-gray-700">
              <span className="text-sm font-medium">Learn more</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Home;