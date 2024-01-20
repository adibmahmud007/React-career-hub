import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import AppliedJObs from './components/AppliedJobs/AppliedJObs.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import Job from './components/Job/Job.jsx';

const router=createBrowserRouter([
  {
    path: '/',
    element:<Root></Root>,
    children:[
      {
        path: '/',
        element:<Home></Home>
      },

      {
        path: '/applied',
        element: <AppliedJObs></AppliedJObs>
      },
      {
        path:'/jobs',
        element: <Job></Job>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
