import { Outlet } from 'react-router-dom';
import Navbar from './NavBar';

const MainLayout = () => {
  return (
    <main>
      <Navbar />
      {/* Outlet will render the content of the current route */}
      <Outlet />
    </main>
  );
};

export default MainLayout;
