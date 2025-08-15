import { Footer } from "./ui/Footer"
import { Navbar } from "./ui/Navbar"

export const Layout = ({ children, routes }) => {
  return (
    <div className='layout'>
      <Navbar routes={routes} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
