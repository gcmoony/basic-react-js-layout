import { Outlet } from "react-router"
import { Footer } from "./ui/Footer"
import { Navbar } from "./ui/Navbar"
import styles from "./../App.module.css"

export const Layout = ({ routes }) => {
  return (
    <div className={styles.layout}>
      <Navbar routes={routes} />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
