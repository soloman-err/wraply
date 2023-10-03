import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import Checkout from '../pages/Checkout/Checkout';
import Home from '../pages/Home/Home';
import About from '../pages/about/About';
import Cart from '../pages/cart/Cart';
import Contact from '../pages/contact/Contact';
import Deals from '../pages/deals/Deals';
import ErrorPage from '../pages/error/ErrorPage';
import Payments from '../pages/payments/Payments';
import ProductInfo from '../pages/productInfo/ProductInfo';
import Queue from '../pages/queue/Queue';
import Shop from '../pages/shop/Shop';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'product-info', element: <ProductInfo /> },
      { path: 'checkout', element: <Checkout /> },
      { path: 'cart', element: <Cart /> },
      { path: 'queue', element: <Queue /> },
      { path: 'payments', element: <Payments /> },
      { path: 'deals', element: <Deals /> },
      { path: 'shop', element: <Shop /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'cart', element: <Cart /> },
    ],
  },
  { path: '*', element: <ErrorPage /> },
]);

export default router;
