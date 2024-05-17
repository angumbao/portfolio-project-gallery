import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingLayout from "./components/layout/LandingLayout";
import GalleryLandingPage from "./components/pages/GalleryLandingPage";
import AllProjects from "./components/projects/AllProjects";
import FAQPage from "./components/pages/FAQPage";
import ProjectsLayout from "./components/layout/ProjectsLayout";
import Ecommerce from "./components/projects/Ecommerce";
import BusinessSolution from "./components/projects/BusinessSolution";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingLayout />,
      children: [
        {
          path: "/",
          element: <GalleryLandingPage />,
        },
      ],
    },
    {
      path: "/faq",
      element: <ProjectsLayout />,
      children: [
        {
          path: "/faq",
          element: <FAQPage />,
        },
      ],
    },
    {
      path: "/projects",
      element: <ProjectsLayout />,
      children: [
        {
          path: "/projects",
          element: <AllProjects />,
        },
        { path: "/projects/e-commerce", element: <Ecommerce /> },
        {
          path: "/projects/business-solution",
          element: <BusinessSolution />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
