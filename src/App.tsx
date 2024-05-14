import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingLayout from "./components/layout/LandingLayout";
import GalleryLandingPage from "./components/pages/GalleryLandingPage";
import AllProjects from "./components/projects/AllProjects";
import FAQPage from "./components/pages/FAQPage";
import ProjectsLayout from "./components/layout/ProjectsLayout";

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
        // TODO: import project page template and pass relevant props
        // { path: "/projects/e-commerce-projects", element: <EcommerceProjects /> },
        // {
        //   path: "/projects/business-solution-projects",
        //   element: <BusinessSolutionProjects />,
        // },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
