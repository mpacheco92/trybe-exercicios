export default function LuckyNumbers() {
  function sortedNumbers() {
    return Math.floor(Math.random() * 60 + 1);
  }

  return (
    <div>
      <h2>Seus números da sorte da Mega-Sena são:</h2>
      <ul>
        <li>{sortedNumbers()}</li>
        <li>{sortedNumbers()}</li>
        <li>{sortedNumbers()}</li>
        <li>{sortedNumbers()}</li>
        <li>{sortedNumbers()}</li>
        <li>{sortedNumbers()}</li>
      </ul>
    </div>
  )
}