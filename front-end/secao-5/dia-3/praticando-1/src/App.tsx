// src/App.tsx
import { ThemeProvider } from 'styled-components';
import { Title } from './styles';

export default function App() {
  const theme = {
    borderColor: '#1A1B1C',
    textColor: '#1FB621',
  }
  return (
    <ThemeProvider theme={ theme }>
      <Title>
        Styled Components
      </Title>
    </ThemeProvider>
  )
};
