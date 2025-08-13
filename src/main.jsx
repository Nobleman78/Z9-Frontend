import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Preloader from './components/Utility/Preloader'
import './index.css'
import Login from './components/Account/Login.jsx'
import Registration from './components/Account/Registration.jsx'
import AuthProvider from './components/ContextApi/AuthProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Dashboard from './components/Pages/Dashboard/Dashboard.jsx'
import DashboardHome from './components/Pages/Dashboard/DashboardPages/Home/Home.jsx'
import ManageBlogs from './components/Pages/Dashboard/DashboardPages/Blogs/ManageBlogs.jsx'
import AddBlog from './components/Pages/Dashboard/DashboardPages/Blogs/AddBlogs.jsx'
import UpdateBlog from './components/Pages/Dashboard/DashboardPages/Blogs/UpdateBlog.jsx'
import ManageVisa from './components/Pages/Dashboard/DashboardPages/Visa/ManageVisa.jsx'
// import AddVisa from './components/Pages/Dashboard/DashboardPages/Visa/AddVisa.jsx'
import UpdateVisa from './components/Pages/Dashboard/DashboardPages/Visa/UpdateVisa.jsx'
import AddVisa from './components/Pages/Dashboard/DashboardPages/Visa/AddVisa.jsx'
import ManageDomestik from './components/Pages/Dashboard/DashboardPages/Domestic/ManageDomestik.jsx'
import AddDomestic from './components/Pages/Dashboard/DashboardPages/Domestic/AddDomestic.jsx'
import UpdateDomestic from './components/Pages/Dashboard/DashboardPages/Domestic/UpdateDomestic.jsx'
import ManageInternational from './components/Pages/Dashboard/DashboardPages/International/ManageInternational.jsx'
import AddInternational from './components/Pages/Dashboard/DashboardPages/International/AddInternational.jsx'
import UpdateInternational from './components/Pages/Dashboard/DashboardPages/International/UpdateInternational.jsx'
import User from './components/Pages/Dashboard/DashboardPages/User/User.jsx'


const Home = lazy(() => import('./components/Pages/Home/Home'))
const VisaService = lazy(() => import('./components/Pages/Visa/VisaService'))
const AirTicket = lazy(() => import('./components/Pages/Ticket/AirTicket'))
const VisaDetailes = lazy(() => import('./components/Pages/Visa/VisaDetailes'))
const NotFound = lazy(() => import('./components/Utility/NotFound'))
const Contact = lazy(() => import('./components/Pages/Contact/Contact'))
const International = lazy(() => import('./components/Pages/International/International'))
const Domestic = lazy(() => import('./components/Pages/Domestic/Domestic'))
const DometicPackDetails = lazy(() => import('./components/Pages/Domestic/DometicPackDetails'))
const InternationalPackDetails = lazy(() => import('./components/Pages/International/InternationalPackDetails'))
const Blog = lazy(() => import('./components/Pages/Blog/Blog'))
const TourPackages = lazy(() => import('./components/Pages/TourPack/TourPackages'))
const BlogDetailes = lazy(() => import('./components/Pages/Blog/BlogDetailes'))
const News = lazy(() => import('./components/Pages/News/News'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Suspense fallback={<Preloader />}><Home /></Suspense>,
      },
      {
        path: 'visaservices',
        element: <Suspense fallback={<Preloader />}><VisaService /></Suspense>,
      },
      {
        path: 'visadetails/:name',
        element: <Suspense fallback={<Preloader />}><VisaDetailes /></Suspense>,
      },
      {
        path: 'airticket',
        element: <Suspense fallback={<Preloader />}><AirTicket /></Suspense>,
      },
      {
        path: 'contact',
        element: <Suspense fallback={<Preloader />}><Contact /></Suspense>,
      },
      {
        path: 'packages/domestic',
        element: <Suspense fallback={<Preloader />}><Domestic /></Suspense>,
      },
      {
        path: 'packages/international',
        element: <Suspense fallback={<Preloader />}><International /></Suspense>,
      },
      {
        path: 'packages/domestic/:id',
        element: <Suspense fallback={<Preloader />}><DometicPackDetails /></Suspense>,
      },
      {
        path: 'packages/international/:id',
        element: <Suspense fallback={<Preloader />}><InternationalPackDetails /></Suspense>,
      },
      {
        path: 'blogs',
        element: <Suspense fallback={<Preloader />}><Blog /></Suspense>,
      },
      {
        path: 'blogs/:id',
        element: <Suspense fallback={<Preloader />}><BlogDetailes /></Suspense>,
      },
      {
        path: 'tourpackages',
        element: <Suspense fallback={<Preloader />}><TourPackages /></Suspense>,
      },
      {
        path: 'news',
        element: <Suspense fallback={<Preloader />}><News /></Suspense>,
      },
      {
        path: 'login',
        element: <Suspense fallback={<Preloader />}><Login /></Suspense>,
      },
      {
        path: 'registration',
        element: <Suspense fallback={<Preloader />}><Registration /></Suspense>
      },
      {
        path: 'dashboard',
        element: <Suspense fallback={<Preloader />}><Dashboard /></Suspense>,
        children: [
          {
            path: '/dashboard/home',
            element: <DashboardHome />
          },
          {
            path: '/dashboard/manageblog',
            element: <ManageBlogs />
          },
          {
            path: '/dashboard/addblog',
            element: <AddBlog />
          },
          {
            path: '/dashboard/updateblog/:id',
            element: <UpdateBlog />
          },
          {
            path:'/dashboard/managevisa',
            element:<ManageVisa/>
          },
          {
            path:'/dashboard/addvisa',
            element:<AddVisa/>
          },
          {
            path:'/dashboard/updatevisa/:id',
            element:<UpdateVisa/>
          },
          {
            path:'/dashboard/managedomestic',
            element:<ManageDomestik/>
          },
          {
            path:'/dashboard/adddomestic',
            element:<AddDomestic/>
          },
          {
            path:'/dashboard/updatedomestic/:id',
            element:<UpdateDomestic/>
          },
          {
            path:'/dashboard/manageinternational',
            element:<ManageInternational/>
          },
          {
            path:'/dashboard/addinternational',
            element:<AddInternational/>
          },
          {
            path:'/dashboard/updateinternational/:id',
            element:<UpdateInternational/>
          },
          {
            path:'/dashboard/users',
            element:<User/> 
          }
        ]
      },
      {
        path: '*',
        element: <Suspense fallback={<Preloader />}><NotFound /></Suspense>,
      },
    ],
  },
])
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)