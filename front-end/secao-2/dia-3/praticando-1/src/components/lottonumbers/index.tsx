export default function LottoNumbers({ numbers }: { numbers: Array<number> }) {

  return (
    <>
      <h3>Os números sorteados são:</h3>
      <ul>
        {numbers.length === 6 ? (
          numbers.map((number) => (
            <li>{number}</li>
          ))
        ) : (
          <h3>Erro: a lista não contém 6 números</h3>
        )}
      </ul>
    </>
  )
}