import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import TrustBar from '../components/TrustBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function RootLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <TrustBar />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
