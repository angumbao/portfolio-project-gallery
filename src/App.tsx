import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LandingLayout from './components/layout/LandingLayout';
import GalleryLandingPage from './components/pages/GalleryLandingPage';
import AllProjects from './components/projects/AllProjects';
import EcommerceProjects from './components/projects/EcommerceProjects';
import BusinessSolutionProjects from './components/projects/BusinessSolutionProjects';
import FAQPage from './components/pages/FAQPage';
import ProjectsLayout from './components/layout/ProjectsLayout';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <LandingLayout />,
			children: [
				{
					path: '/',
					element: <GalleryLandingPage />,
				},
				{
					path: '/faq',
					element: <FAQPage />,
				},
			],
		},
		{
			path: '/projects',
			element: <ProjectsLayout />,
			children: [
				{
					path: '/projects',
					element: <AllProjects />,
				},

				{ path: '/projects/e-commerce', element: <EcommerceProjects /> },
				{
					path: '/projects/business-solutions',
					element: <BusinessSolutionProjects />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
