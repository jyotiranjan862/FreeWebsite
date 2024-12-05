import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home";
import Header from "./component/Header";
import About from "./component/About";
import Service from "./component/Service";
import ContactUs from "./component/ContactUs"; // Import the Contact Us component
import Footer from "./component/Footor"; // Import the Footer component
import Error from "./component/404";
import Nav from "./component/Nav";
import Product from "./component/Product";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          {/* <Header /> */}
          <Nav />
          <Home />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          {/* <Header /> */}
          <Nav />
          <About />
          <Footer /> {/* Footer will be rendered here for About route */}
        </>
      ),
    },
    {
      path: "/login",
      element: <Error />,
    },
    {
      path: "/services", // Define the /services route
      element: (
        <>
          {/* <Header /> */}
          <Nav />
          <Service />
          <Footer /> {/* Footer will be rendered here for Service route */}
        </>
      ),
    },
    {
      path: "/contact", // Define the /contact route
      element: (
        <>
          {/* <Header /> */}
          <Nav />
          <ContactUs />
          <Footer /> {/* Footer will be rendered here for ContactUs route */}
        </>
      ),
    },
    {
      path: "/service/:id", // Use dynamic routing for product pages
      element: (
        <>
          {/* <Header /> */}
          <Nav />
          <Product />
          <Footer /> {/* Footer will be rendered here for Product route */}
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
