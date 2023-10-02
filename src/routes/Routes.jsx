import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import Checkout from '../pages/Checkout/Checkout';
import Home from '../pages/Home/Home';
import Cart from '../pages/cart/Cart';
import Payments from '../pages/payments/Payments';
import ProductInfo from '../pages/productInfo/ProductInfo';
import Queue from '../pages/queue/Queue';

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
    ],
  },
]);

export default router;
