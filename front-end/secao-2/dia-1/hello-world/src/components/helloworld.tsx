import calcularIdade from "../utils/age";
import ModuleDetails from "./moduledetails";
import Title from "./title";

export default function HelloWorld() {
  const birth = '17/12/1992';
  const age = calcularIdade(birth);

  return (
    <>
      <Title />
      <ModuleDetails />
      <h2>Sua idade é { age }</h2>
    </>
  )
}