import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/coffees')
  }
  return (
    <>
      <h1>Cafeteria Tryber</h1>
      <button onClick={ handleClick }>Conheça nossos produtos</button>
    </>
  )
}