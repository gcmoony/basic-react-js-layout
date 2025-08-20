import { Link } from "react-router"
import reactLogo from "../../assets/react.svg"
import styles from "../../App.module.css"

export const Navbar = ({ routes = [] }) => {
  return (
    <header className={styles.navbar}>
      <div className={styles["navbar-logo"]}>
        <img
          src={reactLogo}
          className={styles.img}
          height={50}
        />
        <h1>React Template</h1>
      </div>
      {
        <ul className={styles["navbar-desktop-links"]}>
          {routes.map((route, index) => {
            if (route.navItem) {
              return (
                <li key={index}>
                  <Link to={route.path}>{route.name}</Link>
                </li>
              )
            }
          })}
        </ul>
      }
    </header>
  )
}
