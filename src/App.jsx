import { createHashRouter, RouterProvider, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Envelope from './pages/Envelope';
import BirthdayWish from './pages/BirthdayWish';
import Home from './pages/Home';
import Memories from './pages/Memories';
import Crossroads from './pages/Crossroads';
import Bestie from './pages/Bestie';
import Love from './pages/Love';
import Letter from './pages/Letter';
import Gift from './pages/Gift';
import DatePage from './pages/DatePage';
import Confirm from './pages/Confirm';
import Reset from './pages/Reset';

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Envelope /> },
      { path: '/wish', element: <BirthdayWish /> },
      { path: '/home', element: <Home /> },
      { path: '/memories', element: <Memories /> },
      { path: '/crossroads', element: <Crossroads /> },
      { path: '/bestie', element: <Bestie /> },
      { path: '/love', element: <Love /> },
      { path: '/letter', element: <Letter /> },
      { path: '/gift', element: <Gift /> },
      { path: '/date', element: <DatePage /> },
      { path: '/confirm', element: <Confirm /> },
      { path: '*', element: <Navigate to="/" replace /> },
      { path: '/reset', element: <Reset /> },,
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}