import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from './components/Layout/Footer';
import Navbar from './components/Layout/Navbar';
import Header from './components/Layout/Header';
import Preloader from './components/Utility/Preloader';
import { useEffect, useState } from 'react';
import SEO from './components/SEO/Seo';


function App() {
  const [loading, setLoading] = useState(true);
  const [restoreScroll, setRestoreScroll] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setRestoreScroll(true); // Enable scroll restoration after preloader
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Reset scroll to top when preloader disappears
    if (!loading) {
      window.scrollTo(0, 0);
    }
  }, [loading]);

  return (
    <div className='flex flex-col min-h-screen overflow-x-hidden'>
      <SEO
        title="Travel Agency"
        description="Best travel agency offering visa services, air tickets, and tour packages worldwide."
        keywords="travel, visa, air ticket, tour packages, international travel"
        url="/"
      />
      {/* Only restore scroll AFTER preloader is done */}
      {restoreScroll && <ScrollRestoration />}

      <Header />
      <Navbar />
      <main className='flex-grow'>
        {loading && <Preloader />}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;