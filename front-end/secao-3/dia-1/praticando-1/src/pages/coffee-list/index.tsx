import { Link } from "react-router-dom"
import { coffeeList } from "../../data";

export default function CoffeeList() {

  return (
    <>
      <h1>Nossos cafés</h1>
      <main>
        <ul>
          {
            coffeeList.map((coffee) => (
              <Link to={ `/coffees/${coffee.slug}` } key={ coffee.id }>
                <li>{ coffee.title }</li>
              </Link>
            ))
          }
        </ul>
      </main>
    </>
  )
}
