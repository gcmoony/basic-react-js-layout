import { useRef } from "react"
import styles from "../../App.module.css"

export const Footer = () => {
  const date = useRef(new Date(Date.now()).getFullYear())
  return (
    <footer className={styles.footer}>
      <p className={styles.p}>
        &copy;{String(date.current)}
        <a
          className={styles.a}
          href='https://gcmunoz.com'
          target='_blank'
        >
          {" "}
          George Cadel-Munoz
        </a>
      </p>
    </footer>
  )
}
