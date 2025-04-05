import { useState } from 'react'
import React from 'react';
import CodeforcesStats from './components/CodeforcesStats/CodeforcesStats'
import GitHubProfile from './components/GitHubProfile/GitHubProfile'
import Weather from './components/Weather/Weather';
import News from './components/News/News';
import Movies from './components/Movies/Movies';
import Motivator from './components/Motivator/Motivator';
import Navbar from './components/Header/Navbar/Navbar';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
    </>
  )
}

export default App