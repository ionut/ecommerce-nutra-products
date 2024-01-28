import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Products } from "./pages/Products/Products";
import { Product } from "./pages/Product/Product";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Faq } from "./pages/Faq/Faq";
import { AboutUs } from "./pages/AboutUs/AboutUs"
import { ContacUs } from "./pages/ContactUs/ContacUs";
import { Terms } from "./pages/Terms/Terms";
import { Privacy } from "./pages/Privacy/Privacy";
import { Disclaimer } from "./pages/Disclaimer/Disclaimer";
import { ViewCart } from "./pages/ViewCart/ViewCart";
import '../src/assets/css/index.css'
import { useState } from "react";
import { Loading } from "./components/Utilities/Loading";

const Layout = () => {
  // Set loading state to true initially
  const [loading, setLoading] = useState(true);

  // Page will load after 2 seconds
  setTimeout(() => {
    setLoading((loading) => !loading);
  }, 2000);
  // If page is in loading state, display
  // loading message. Modify it as per your
  // requirement.
  if (loading) {
    return <Loading />;
  }

  // If page is not in loading state, display page.
  else {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }




}

const router = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [{
    path: "/",
    element: <Home />
  }, {
    path: "/products",
    element: <Products />
  }, {
    path: "/product/:id",
    element: <Product />
  }, {
    path: "/faq",
    element: <Faq />
  }, {
    path: "/about-us",
    element: <AboutUs />
  }, {
    path: "/contact-us",
    element: <ContacUs />
  }, {
    path: "/terms-and-conditions",
    element: <Terms />
  }, {
    path: "/privacy-policy",
    element: <Privacy />
  }, {
    path: "/disclaimer",
    element: <Disclaimer />
  },
  {
    path: "/cart",
    element: <ViewCart />
  }]
},])

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;