import { Outlet } from 'react-router-dom';
import { BarraNavegadora } from '../components/BarraNavegadora';
import { useEffect, useState } from 'react';
import { Loading } from '../components/Loading';
import { Footer } from '../components/Footer';

export const LayoutPublic = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <BarraNavegadora />
      {
        loading && <Loading setLoading={setLoading} />
      }
      {
        !loading && <main className="container">
          <Outlet />
        </main>
      }
      <Footer />
    </>
  )
};
