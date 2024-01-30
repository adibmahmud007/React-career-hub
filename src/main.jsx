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
// import Job from './components/Job/Job.jsx';
import JObDetails from './components/JobDetails/JObDetails.jsx';
import Jobs from './components/Jobs/Jobs.jsx';
import CategoryList from './components/CategoryList/CategoryList.jsx';
// import TestJob from './components/TestJob/TestJob.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/applied',
        element: <AppliedJObs></AppliedJObs>,
        loader: () => fetch('/jobs.json')
      },
      {
        path: '/jobs',
        element: <Jobs></Jobs>,
        loader: () => fetch('/jobs.json')
      },
      {
        path:'/category',
        element: <CategoryList></CategoryList>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/job/:id',
        element: <JObDetails></JObDetails>,
        loader: () => fetch('/jobs.json')
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
