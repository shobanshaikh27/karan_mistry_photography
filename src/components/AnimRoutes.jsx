import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Outlet } from 'react-router-dom';
import Root from '../pages/Root';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import About from '../pages/About';
import AddGalleryImageForm from '../pages/AddGalleryImageForm';

const AnimRoutes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route exact path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="contact" element={<Contact />} />
        <Route exact path="portfolio" element={<Portfolio />} />
        <Route exact path="add-img" element={<AddGalleryImageForm />} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} >
        <Outlet />
      </RouterProvider>

    </>
  );
}

export default AnimRoutes;
