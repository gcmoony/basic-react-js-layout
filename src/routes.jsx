import { Home } from "./components/pages/Home"
import { About } from "./components/pages/About"

export const basicRoutes = [
  { path: "/", element: <Home />, name: "Home" },
  { path: "/about", element: <About />, name: "About" },
]
