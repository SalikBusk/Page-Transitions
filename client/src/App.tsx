import React from 'react';
import './App.css';

import {AnimatePresence} from 'framer-motion'

import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from 'react-router-dom'
import Navbar from './Components/Navbar';


// pages
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

const Layout = () => {
  return(
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <><Home/></>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
    ]
  }
])

function App() {

  
  if(!router) return null;


  return (
    <div className="App">
      <AnimatePresence mode='wait'>
        <RouterProvider router={router} />
      </AnimatePresence>
    </div>
  );
}

export default App;
