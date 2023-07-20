import { createBrowserRouter } from "react-router-dom";
import Products from "../Products";
import Cart from "../Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

export default router;
