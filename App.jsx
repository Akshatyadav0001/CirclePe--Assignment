import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import F12Main from './F12Main';

import Group1116599851 from './pages/Group1116599851';
import Group1116599852 from './pages/Group1116599852';
import Group1116599853 from './pages/Group1116599853';
import Group1116599854 from './pages/Group1116599854';
import Group1116599855 from './pages/Group1116599855';
import Group1116599856 from './pages/Group1116599856';
import MacBookPro1410 from './pages/MacBookPro1410';
import MacBookPro1411 from './pages/MacBookPro1411';
import MacBookPro1412 from './pages/MacBookPro1412';
import MacBookPro1413 from './pages/MacBookPro1413';
import MacBookPro1414 from './pages/MacBookPro1414';
import MacBookPro149 from './pages/MacBookPro149';


const router = createBrowserRouter([
  { path: '/', element: <F12Main /> },
{ path: '/Group1116599851', element: <Group1116599851 /> },
{ path: '/Group1116599852', element: <Group1116599852 /> },
{ path: '/Group1116599853', element: <Group1116599853 /> },
{ path: '/Group1116599854', element: <Group1116599854 /> },
{ path: '/Group1116599855', element: <Group1116599855 /> },
{ path: '/Group1116599856', element: <Group1116599856 /> },
{ path: '/MacBookPro1410', element: <MacBookPro1410 /> },
{ path: '/MacBookPro1411', element: <MacBookPro1411 /> },
{ path: '/MacBookPro1412', element: <MacBookPro1412 /> },
{ path: '/MacBookPro1413', element: <MacBookPro1413 /> },
{ path: '/MacBookPro1414', element: <MacBookPro1414 /> },
{ path: '/MacBookPro149', element: <MacBookPro149 /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}