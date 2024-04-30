import { NavLink } from "react-router-dom";
import './nav-bar.css'

export default function NavBar() {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/coffees'>Cafés</NavLink>
    </nav>
  )
}