import { render, screen } from '@testing-library/react';
import ValidEmail from './components/ValidEmail';

test('Testando o componente ValidEmail, caso o email passado seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);

  const isValid = screen.getByText(/Email Válido/i);
  expect(isValid).toBeInTheDocument();
});
