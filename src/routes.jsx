import { Home } from "./components/pages/Home"
import { About } from "./components/pages/About"
import { SunnysideAgencyLandingPage } from "./components/pages/SunnysideAgencyLandingPage"

export const basicRoutes = [
  { path: "/", element: <Home />, name: "Home", navItem: true },
  { path: "/about", element: <About />, name: "About", navItem: true },
]

export const projectRoutes = [
  {
    path: "/sunnyside-landing",
    element: <SunnysideAgencyLandingPage />,
    name: "Sunnyside Agency Landing Page",
    navItem: false,
  },
]
