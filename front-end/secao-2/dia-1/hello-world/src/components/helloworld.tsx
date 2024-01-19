import ModuleDetails from "./moduledetails";
import Title from "./title";

export default function HelloWorld() {


  function calcularIdade(dataNascimento: string): number {

    const partes = dataNascimento.split('/');

    if (partes.length !== 3) {
      throw new Error('Formato de data inválido. Use o formato DD/MM/AAAA.');
    }

    const diaNascimento: number = parseInt(partes[0], 10);
    const mesNascimento: number = parseInt(partes[1], 10) - 1;
    const anoNascimento: number = parseInt(partes[2], 10);
    const dataNascimentoObj: Date = new Date(anoNascimento, mesNascimento, diaNascimento);
    const dataAtual: Date = new Date();
    const diferencaEmMilissegundos: number = dataAtual.getTime() - dataNascimentoObj.getTime();
    const idadeEmAnos: number = diferencaEmMilissegundos / (1000 * 60 * 60 * 24 * 365.25);
    const idadeInteira: number = Math.floor(idadeEmAnos);

    return idadeInteira;
  }
  

  return (
    <>
      <Title />
      <ModuleDetails />
      <h2>Sua idade é { calcularIdade('17/12/1992') }</h2>
    </>
  )
}