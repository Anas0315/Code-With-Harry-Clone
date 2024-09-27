import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import CourcesPage from './components/Courses/CourcesPage/CourcesPage.jsx'
import TutorialPage from './components/TutorialPage/TutorialPage.jsx'
import BlogPage from './components/BlogPage/BlogPage.jsx'
import NotesPage from './components/NotesPage/NotesPage.jsx'
import Contact from './components/Contact/Contact.jsx'
import MyGearPage from './components/MyGearPage.jsx/MyGearPage.jsx'
import WorkWithUs from './components/WorkWithUs/WorkWithUs.jsx'
  
const router = createBrowserRouter([
{
  path :'/',
   element :<App/>,
   children:[
    {
      path : '',
      element : <Home/>
    },
    {
      path : 'courses',
      element : <CourcesPage/>
    },
    {
      path : 'tutorials',
      element : <TutorialPage/>
    },
    {
      path : 'blogs',
      element : <BlogPage/>
    },
    {
      path :'notes',
      element : <NotesPage/>
    },
    {
      path: 'contact',
      element : <Contact/>
    },
    {
      path:'myGear',
      element: <MyGearPage/>
    },
    {
      path:'workWithUs',
      element:<WorkWithUs/>
    },
   ]
},


])
ReactDOM.createRoot(document.getElementById('root')).render(
   
  <React.StrictMode>
      <RouterProvider router = {router} />
  </React.StrictMode>,
)
