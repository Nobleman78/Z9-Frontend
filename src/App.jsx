import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import Footer from './components/Layout/Footer';
import Navbar from './components/Layout/Navbar';
import Header from './components/Layout/Header';
import Preloader from './components/Utility/Preloader';
import { useEffect, useState } from 'react';


function App() {
  const [loading, setLoading] = useState(true);
  const [restoreScroll, setRestoreScroll] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setRestoreScroll(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Reset scroll to top when preloader disappears
    if (!loading) {
      window.scrollTo(0, 0);
    }
  }, [loading]);
  const location = useLocation()
  const isDashBoardRoute = location.pathname.startsWith('/dashboard')
  return (
    <>
      {!isDashBoardRoute && <Header />}
      {!isDashBoardRoute && <Navbar />}
      <div className='flex flex-col min-h-screen overflow-x-hidden'>
        {/* Only restore scroll AFTER preloader is done */}
        {restoreScroll && <ScrollRestoration />}
        <main className='flex-grow'>
          {loading && <Preloader />}
          <Outlet />
        </main>
        {!isDashBoardRoute && <Footer />}
      </div>
    </>
  );
}

export default App;