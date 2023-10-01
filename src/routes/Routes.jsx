import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import Checkout from '../pages/Checkout/Checkout';
import Home from '../pages/Home/Home';
import Product from '../pages/Product/Product';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'product-info', element: <Product /> },
      { path: 'checkout', element: <Checkout /> },
    ],
  },
]);

export default router;
