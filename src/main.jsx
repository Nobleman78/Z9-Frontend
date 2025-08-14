import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Preloader from './components/Utility/Preloader'
import './index.css'
import AuthProvider from './components/ContextApi/AuthProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import About from './components/Pages/About/About.jsx'
import OurTeam from './components/Pages/About/OurTeam.jsx'

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
const Login = lazy(() => import('./components/Account/Login.jsx'))
const Registration = lazy(() => import('./components/Account/Registration.jsx'))

// Lazy load all Dashboard and Dashboard-related components
const Dashboard = lazy(() => import('./components/Pages/Dashboard/Dashboard.jsx'))
const DashboardHome = lazy(() => import('./components/Pages/Dashboard/DashboardPages/Home/Home.jsx'))
const ManageBlogs = lazy(() => import('./components/Pages/Dashboard/DashboardPages/Blogs/ManageBlogs.jsx'))
const AddBlog = lazy(() => import('./components/Pages/Dashboard/DashboardPages/Blogs/AddBlogs.jsx'))
const UpdateBlog = lazy(() => import('./components/Pages/Dashboard/DashboardPages/Blogs/UpdateBlog.jsx'))
const ManageVisa = lazy(() => import('./components/Pages/Dashboard/DashboardPages/Visa/ManageVisa.jsx'))
const UpdateVisa = lazy(() => import('./components/Pages/Dashboard/DashboardPages/Visa/UpdateVisa.jsx'))
const AddVisa = lazy(() => import('./components/Pages/Dashboard/DashboardPages/Visa/AddVisa.jsx'))
const ManageDomestik = lazy(() => import('./components/Pages/Dashboard/DashboardPages/Domestic/ManageDomestik.jsx'))
const AddDomestic = lazy(() => import('./components/Pages/Dashboard/DashboardPages/Domestic/AddDomestic.jsx'))
const UpdateDomestic = lazy(() => import('./components/Pages/Dashboard/DashboardPages/Domestic/UpdateDomestic.jsx'))
const ManageInternational = lazy(() => import('./components/Pages/Dashboard/DashboardPages/International/ManageInternational.jsx'))
const AddInternational = lazy(() => import('./components/Pages/Dashboard/DashboardPages/International/AddInternational.jsx'))
const UpdateInternational = lazy(() => import('./components/Pages/Dashboard/DashboardPages/International/UpdateInternational.jsx'))
const User = lazy(() => import('./components/Pages/Dashboard/DashboardPages/User/User.jsx'))


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement:<div>Something went wrong please reload the page</div>,
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
        path: 'about',
        element: <About />
      },
      {
        path: 'ourteam',
        element: <OurTeam />
      },

      {
        path: 'dashboard',
        element: <Suspense fallback={<Preloader />}><Dashboard /></Suspense>,
        children: [
          {
            path: '/dashboard/home',
            element: <Suspense fallback={<Preloader />}><DashboardHome /></Suspense>
          },
          {
            path: '/dashboard/manageblog',
            element: <Suspense fallback={<Preloader />}><ManageBlogs /></Suspense>
          },
          {
            path: '/dashboard/addblog',
            element: <Suspense fallback={<Preloader />}><AddBlog /></Suspense>
          },
          {
            path: '/dashboard/updateblog/:id',
            element: <Suspense fallback={<Preloader />}><UpdateBlog /></Suspense>
          },
          {
            path: '/dashboard/managevisa',
            element: <Suspense fallback={<Preloader />}><ManageVisa /></Suspense>
          },
          {
            path: '/dashboard/addvisa',
            element: <Suspense fallback={<Preloader />}><AddVisa /></Suspense>
          },
          {
            path: '/dashboard/updatevisa/:id',
            element: <Suspense fallback={<Preloader />}><UpdateVisa /></Suspense>
          },
          {
            path: '/dashboard/managedomestic',
            element: <Suspense fallback={<Preloader />}><ManageDomestik /></Suspense>
          },
          {
            path: '/dashboard/adddomestic',
            element: <Suspense fallback={<Preloader />}><AddDomestic /></Suspense>
          },
          {
            path: '/dashboard/updatedomestic/:id',
            element: <Suspense fallback={<Preloader />}><UpdateDomestic /></Suspense>
          },
          {
            path: '/dashboard/manageinternational',
            element: <Suspense fallback={<Preloader />}><ManageInternational /></Suspense>
          },
          {
            path: '/dashboard/addinternational',
            element: <Suspense fallback={<Preloader />}><AddInternational /></Suspense>
          },
          {
            path: '/dashboard/updateinternational/:id',
            element: <Suspense fallback={<Preloader />}><UpdateInternational /></Suspense>
          },
          {
            path: '/dashboard/users',
            element: <Suspense fallback={<Preloader />}><User /></Suspense>
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
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
