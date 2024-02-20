import { screen } from '@testing-library/react';
import { renderWithRouter } from '../utils/renderWithRouter';
import App from '../App';

it('Renderiza texto da página inicial', async () => {
  const { user } = renderWithRouter(<App />);

  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
  
  const aboutLink = screen.getByRole('link', { name: /Sobre/i })
  await user.click(aboutLink);
  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
});

it('Renderiza diretamente na rota About', async () => {
  const { user } = renderWithRouter(<App />, { route: '/about' });

  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();

  const homeLink = screen.getByRole('link', { name: /início/i });
  await user.click(homeLink);
  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
});

it('Testando rota não definida', () => {
  renderWithRouter(<App />, { route: '/search' });
  expect(screen.getByText(/Página não encontrada/i)).toBeInTheDocument();
});
