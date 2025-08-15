import { useState } from "react"

export const Button = () => {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount((prev) => prev + 1)}>
      Pressed {count} time{count == 1 ? "" : "s"}
    </button>
  )
}
