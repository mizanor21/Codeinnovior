import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/Error/ErrorPage";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Components/Home/Home";
import About from "../Components/Others/About/About";
import Contact from "../Components/Others/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default router;
