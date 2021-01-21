import HomePage from "../pages/HomePage";
import ProjectsPage from "../pages/ProjectsPage";
import HobbiesPage from "../pages/HobbiesPage";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";
import ExperiencePage from "../pages/ExperiencePage";
import { Route } from "../models/Route";

export const AppRoutes = [
  new Route("/", "Home", HomePage, true),
  new Route("/projects", "Projects", ProjectsPage),
  new Route("/experience", "Experience", ExperiencePage),
  new Route("/hobbies", "Hobbies", HobbiesPage),
  new Route("/blogs", "Blogs", BlogPage),
  new Route("/contact", "Contact", ContactPage),
];
