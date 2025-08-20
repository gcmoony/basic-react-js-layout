import { useState } from "react"
import styles from "../../App.module.css"

export const Button = () => {
  const [count, setCount] = useState(0)

  return (
    <button
      className={styles.button}
      onClick={() => setCount((prev) => prev + 1)}
    >
      Pressed {count} time{count == 1 ? "" : "s"}
    </button>
  )
}
