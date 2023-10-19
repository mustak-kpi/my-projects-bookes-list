import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Header from './components/Header/Header.jsx'
import About from './components/About/About.jsx'
import Body from './components/Body/Body.jsx';
import BookesDetiles from './BookesDetiles/BookesDetiles.jsx';
import LodingSpiner from './LodingSpiner/LodingSpiner.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      { 
        path: '/',
        element: <Home></Home>,
      },
      {
         path: 'Booke',
         element: <Body></Body>,
         loader: () => fetch('https://api.itbook.store/1.0/new')
      },
      {
        path: 'Booke/:BookeId',
        element: <BookesDetiles></BookesDetiles>,
        loader: ({params}) => fetch(`https://api.itbook.store/1.0/books/${params.BookeId}`)
      },
      {
        path: 'About',
        element: <About></About>
      },
      {
        path: 'loder',
        element: <LodingSpiner></LodingSpiner>
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}></RouterProvider>)
