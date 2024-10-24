import { Outlet } from 'react-router-dom';
import Navbar from '../common/NavBar';
import SubNav from '../common/SubNav';

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
