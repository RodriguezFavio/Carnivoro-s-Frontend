import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '../components/Layout/Root';
import ErrorPage from '../pages/Error/Error';
import HomePage from '../pages/Home';
import MealPage from '../pages/Meal';
import ContactPage from '../pages/Contact';
import CheckoutPage from '../pages/Checkout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'meals',
        element: <MealPage />,
        children: [
          {
            path: ':id',
            id: 'menu-detail',
          },
        ],
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'checkout',
        element: <CheckoutPage />,
      },
    ],
  },
]);

export default router;
