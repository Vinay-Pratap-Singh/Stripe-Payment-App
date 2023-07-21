import { createBrowserRouter } from "react-router-dom";
import Products from "../Products";
import Cart from "../Cart";
import CheckoutSuccess from "../Page/CheckoutSuccess";
import CheckoutFail from "../Page/CheckoutFail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout/success",
    element: <CheckoutSuccess />,
  },
  {
    path: "/checkout/fail",
    element: <CheckoutFail />,
  },
]);

export default router;
