import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';

const Root = () => {
  return (
    <div className="container mx-auto flex flex-col justify-between min-h-screen px-2">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
