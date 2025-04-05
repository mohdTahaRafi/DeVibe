import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Code2, Github, Cloud, Newspaper, Film } from 'lucide-react';

function Navbar() {
  const navItems = [
    { path: '/', name: 'Home', icon: Home },
    { path: '/codeforces', name: 'Codeforces', icon: Code2 },
    { path: '/github', name: 'GitHub', icon: Github },
    { path: '/weather', name: 'Weather', icon: Cloud },
    { path: '/news', name: 'News', icon: Newspaper },
    { path: '/movies', name: 'Movies', icon: Film },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">DeVibe</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map(({ path, name, icon: Icon }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-indigo-100 dark:bg-indigo-700 text-indigo-700 dark:text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`
                }
              >
                <Icon className="w-4 h-4 mr-2" />
                {name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;