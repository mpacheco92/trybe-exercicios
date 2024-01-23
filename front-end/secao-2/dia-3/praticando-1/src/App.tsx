// import Footer from './components/footer';
// import Header from './components/header';
// import LuckyNumbers from './components/luckynumbers';
// import Button from './components/Button';
import './App.css';
import LottoNumbers from './components/lottonumbers';

function App() {

  // function handleClick(text: string) {
  //   alert(text)
  // }

  return (
    <div>
      <LottoNumbers numbers={[7, 21, 59, 12, 4, 8]}/>
      <div className="container">
      </div>
    </div>
  )
};

export default App;