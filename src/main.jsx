import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import Layout from './Layout.jsx';
import CodeforcesStats from './components/CodeforcesStats/CodeforcesStats.jsx';
import Home from './components/Home/Home.jsx';
import GitHubProfile from './components/GitHubProfile/GitHubProfile.jsx';
import Movies from './components/Movies/Movies.jsx';
import Weather from './components/Weather/Weather.jsx';
import News from './components/News/News.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/codeforces" element={<CodeforcesStats />} />
      <Route path="/github" element={<GitHubProfile />} />
      <Route path="/news" element={<News />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/movies" element={<Movies />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);
