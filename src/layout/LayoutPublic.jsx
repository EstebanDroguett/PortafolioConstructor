import { Outlet } from 'react-router-dom';
import { BarraNavegadora } from '../components/BarraNavegadora';
import { Footer } from '../components/Footer';

export const LayoutPublic = () => {


  return (
    <>
      <BarraNavegadora />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
};
