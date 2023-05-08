import StorePage from '@/pages/Store';
import '@/styles/index.less';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <StorePage />,
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
