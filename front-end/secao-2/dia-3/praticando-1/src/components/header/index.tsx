import User from "../user";
import './header.css';

export default function Header() {
  return (
    <header className="header">
      <p className="header-user">
        Olá, <User />
      </p>
    </header>
  )
}