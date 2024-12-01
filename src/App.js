import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home';
import Header from './component/Header';
import About from './component/About';

const App = () => {
  // Define your routes
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Home />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Header />
          <About />
        </>
      ),
    },
  ]);

  return (
    <>
      {/* RouterProvider to handle routing */}
      <RouterProvider router={router} />
     
    </>
  );
};

export default App;
