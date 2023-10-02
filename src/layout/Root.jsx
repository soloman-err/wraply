import { Outlet } from 'react-router-dom';
import Footer from '../shared/footer/Footer';
import Header from '../shared/header/Header';

const Root = () => {
  return (
    <div className="container relative mx-auto flex flex-col justify-between min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
