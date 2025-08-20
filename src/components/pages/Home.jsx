import { basicRoutes } from "../../routes"
import { Button } from "../elements/Button"
import { Link } from "react-router"
import styles from "./../../App.module.css"
export const Home = () => {
  return (
    <>
      <h1 className={styles.h1}>React Template</h1>
      <p className={styles.p}>No more setup, just do the work!</p>
      <Button />
      <section className={styles.section}>
        <h2 className={styles.h2}>Project Links</h2>
        {
          <ul className={styles["project-links"]}>
            {basicRoutes.map((route, index) => {
              if (!route.navItem) {
                return (
                  <li key={index}>
                    <Link
                      className={styles.a}
                      to={route.path}
                    >
                      {route.name}
                    </Link>
                  </li>
                )
              }
            })}
          </ul>
        }
      </section>
    </>
  )
}
