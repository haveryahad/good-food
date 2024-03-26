import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
// import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import resList from "./utils/mockData";
import { Provider } from "react-redux";
import appStore from "./utils/redux/appStore";
import Cart from "./components/Cart";
// import Mission from "./components/Mission";
// import Vision from "./components/Vision";

const SignUp = lazy(() => import("./components/SignUp"));
const Contact = lazy(() => import("./components/Contact"));
const Mission = lazy(() => import("./components/Mission"));
const Vision = lazy(() => import("./components/Vision"));

const AppLayout = () => {
  const [loggedInUser, setLoggedInUser] = useState("Default User");
  const userName = useContext(UserContext);
  useEffect(() => {
    setLoggedInUser("Ahad");
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider
        value={{ loggedInUser: loggedInUser, setLoggedInUser: setLoggedInUser }}
      >
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
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
      {
        path: "/Cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
