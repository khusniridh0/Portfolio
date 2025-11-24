import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './assets/css/main.css';

const PreLoadingPage = lazy(() => import("./components/pre-loading-page"))
const Landing = lazy(() => import("./pages/Landing"))
const Test = lazy(() => import("./pages/Test"))

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/test", element: <Test /> }
]);

function Route() {
  return (
    <Suspense fallback={<PreLoadingPage />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default Route