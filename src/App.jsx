import { Layout } from "./components/Layout"
import { BrowserRouter, Route, Routes } from "react-router"
import { basicRoutes } from "./routes"
import Landing from "./projects/sunnyside-agency-landing-page/Landing"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {basicRoutes.map((link, index) => (
            <Route
              key={index}
              path={link.path}
              element={link.element}
            />
          ))}
        </Route>

        <Route
          path='/sunnyside-landing'
          element={<Landing />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
