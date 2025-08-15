import { Link } from "react-router"
import reactLogo from "../../assets/react.svg"

export const Navbar = ({ routes = [] }) => {
  return (
    <header className='navbar'>
      <div className='navbar-logo'>
        <img
          src={reactLogo}
          height={50}
        />
        <h1>React Template</h1>
      </div>
      {
        <ul className='navbar-desktop-links'>
          {routes.map((route, index) => (
            <li key={index}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      }
    </header>
  )
}
