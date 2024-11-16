import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ProductsPage from "./containers/Products";
import FavoritesPage from "./containers/Favorites";
import RootLayout from "./components/Layouts/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <ProductsPage /> },
      { path: "/favorites", element: <FavoritesPage /> },
    ],
  },
]);

const App = (props) => {
  return (
    // <React.Fragment>
    //   <Navigation />
    //   <main>
    //     <Route path="/" component={ProductsPage} exact />
    //     <Route path="/favorites" component={FavoritesPage} />
    //   </main>
    // </React.Fragment>
    <RouterProvider router={router} />
  );
};

export default App;
