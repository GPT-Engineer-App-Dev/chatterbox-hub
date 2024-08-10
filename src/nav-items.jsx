import { Home, Trending, Star } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Popular",
    to: "/popular",
    icon: <Trending className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "All",
    to: "/all",
    icon: <Star className="h-4 w-4" />,
    page: <Index />,
  },
];
