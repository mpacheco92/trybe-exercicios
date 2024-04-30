import { Outlet } from "react-router-dom"
import NavBar from "../nav-bar"

export default function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <footer>
        <span>Trybe - todos os direitos reservados.</span>
      </footer>
    </>
  )
}