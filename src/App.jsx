import "./App.css"
import { Layout } from "./components/Layout"
import { BrowserRouter, Route, Routes } from "react-router"
import { basicRoutes } from "./routes"

function App() {
  return (
    <BrowserRouter>
      <Layout routes={basicRoutes}>
        <Routes>
          {basicRoutes.map((aRoute, index) => (
            <Route
              key={index}
              path={aRoute.path}
              element={aRoute.element}
            />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
