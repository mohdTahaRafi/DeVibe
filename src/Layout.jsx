import React from 'react'
import Headers from './components/Header/Navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom' 
import { ReactLenis, useLenis } from 'lenis/react'


function Layout() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  return (
    <ReactLenis root>
      <Headers />
      <Outlet />
    </ReactLenis>
  )
  
} 

export default Layout