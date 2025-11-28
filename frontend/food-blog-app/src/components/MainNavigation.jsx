import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function MainNavigation() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default MainNavigation

// ✅ What This File Does

// This component is basically your layout — the common structure that appears on every page of your website.

// It includes:

// A Navbar at the top

// The page content in the middle

// A Footer at the bottom
