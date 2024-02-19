import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
// import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Mission from "./components/Mission";
// import Vision from "./components/Vision";

const SignUp = lazy(() => import("./components/SignUp"));
const Contact = lazy(() => import("./components/Contact"));
const Mission = lazy(() => import("./components/Mission"));
const Vision = lazy(() => import("./components/Vision"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: (
          <Suspense>
            <Contact />
          </Suspense>
        ),
        children: [
          {
            path: "Mission",
            element: (
              <Suspense>
                <Mission />
              </Suspense>
            ),
          },
          {
            path: "Vision",
            element: (
              <Suspense>
                <Vision />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/SignUp",
        element: (
          <Suspense>
            <SignUp />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
