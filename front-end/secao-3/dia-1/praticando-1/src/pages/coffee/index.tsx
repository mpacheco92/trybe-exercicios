import { useParams, Link } from "react-router-dom";
import { coffeeList } from "../../data";

export default function Coffee() {
  const params = useParams();
  const currentCoffee = coffeeList.find((coffee) => coffee.slug === params.coffee);

  if (!currentCoffee) {
    return (
      <>
        <h1>Oops! Este café não está na lista.</h1>
        <h2>Acesse a <Link to='/coffees'>página de cafés</Link> e selecione um de nossos produtos.</h2>
      </>
    )
  }

  return (
    <>
      <h1>{ currentCoffee.title }</h1>
      <p>{ currentCoffee.description }</p>
      <div>
        <h2>Ingredientes</h2>
        <ul>
          {
            currentCoffee.ingredients.map((ingredient) => <li key={ ingredient }>{ ingredient }</li>)
          }
        </ul>
      </div>
      <img src={ currentCoffee.image } alt={ currentCoffee.title } />
    </>
  )
}