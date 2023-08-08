import Home from './pages/Home';
import ErrorPage from "./pages/ErrorPage";
import Projets from "./pages/Projets";
import SiteMap from "./pages/SiteMap";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
      path: "projets/:id",
      element: <Projets />,
        errorElement: <ErrorPage />,
    },
    {
        path: "sitemap",
        element: <SiteMap />,
        errorElement: <ErrorPage />,
    },
    {
        path: "*",
        element: <ErrorPage />,
        errorElement: <ErrorPage />,
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}


export default App;
