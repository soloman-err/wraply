import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import Checkout from '../pages/Checkout/Checkout';
import Home from '../pages/Home/Home';
import Cart from '../pages/cart/Cart';
import Payments from '../pages/payments/Payments';
import Product from '../pages/product/Product';
import Wishlist from '../pages/wishlist/Wishlist';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'product-info', element: <Product /> },
      { path: 'checkout', element: <Checkout /> },
      { path: 'cart', element: <Cart /> },
      { path: 'wishlist', element: <Wishlist /> },
      { path: 'payments', element: <Payments /> },
    ],
  },
]);

export default router;
