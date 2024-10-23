import { Outlet } from 'react-router-dom';
import Navbar from './NavBar';
import SubNav from './SubNav';

const MainLayout = () => {
  return (
    <main>
      <Navbar />
      <SubNav />
      {/* Outlet will render the content of the current route */}
      <Outlet />
    </main>
  );
};

export default MainLayout;
