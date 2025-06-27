import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Main from '../Layout/Main';
import { ProductsDetails } from '../Components/Pages/Home/Products/ProductsDetail';
import Cart from '../Components/Shared/Cart/Cart';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/product/:title',
        element: <ProductsDetails />, // Add this
      },
      {
        path: '/cart',
        element: <Cart />, // Add this
      },
    ],
  },
]);
