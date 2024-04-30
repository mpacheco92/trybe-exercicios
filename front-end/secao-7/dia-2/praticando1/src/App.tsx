import './style.css';
import ThemeProvider from './context/ThemeProvider';
import Header from './components/Header';
import Image from './components/Image';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <Header/>
      <Image/>
      <Footer/>
    </ThemeProvider>
  )
}
