import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Landing from "./pages/Landing"
import Test from "./pages/Test"
import './assets/css/main.css'

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/test", element: <Test /> }
]);

function Route() {
  return (
    <RouterProvider router={router} />
  )
}

export default Route