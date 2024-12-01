import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home";
import Header from "./component/Header";
import About from "./component/About";
import Service from "./component/Service";
import ContactUs from "./component/ContactUs"; // Import the Contact Us component
import Footer from "./component/Footor"; // Import the Footer component
import Error from "./component/404";

const App = () => {
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
          <Footer /> {/* Footer will be rendered here for About route */}
        </>
      ),
    },
    {
      path: "/login",
      element: <Error/>
    },
    {
      path: "/services", // Define the /services route
      element: (
        <>
          <Header />
          <Service />
          <Footer /> {/* Footer will be rendered here for Service route */}
        </>
      ),
    },
    {
      path: "/contact", // Define the /contact route
      element: (
        <>
          <Header />
          <ContactUs />
          <Footer /> {/* Footer will be rendered here for ContactUs route */}
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
