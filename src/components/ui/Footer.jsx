import { useRef } from "react"

export const Footer = () => {
  const date = useRef(new Date(Date.now()).getFullYear())
  return (
    <footer className='footer'>
      <p>
        &copy;{String(date.current)}
        <a
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
