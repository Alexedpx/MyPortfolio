import "./style/index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Intro from "./pages/Intro";
import MainPage from "./pages/MainPage";
import ContactCard from "./pages/ContactCard";
import ProjectsList from "./components/ProjectsList";

export default function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Intro />,
		},

		{ path: "/home", element: <MainPage /> },

		{
			path: "/contact",
			element: <ContactCard />,
		},

		{
			path: "/projects",
			element: <ProjectsList />,
		},
	]);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}
