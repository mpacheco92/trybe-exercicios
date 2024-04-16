import { createStore, combineReducers } from 'redux';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import counterReducer from './redux/reducer/counterReducer';

import App, { RootState } from './App';

function renderWithRedux(
  component: JSX.Element,
  state: RootState | {} = {},
  store = createStore(combineReducers(counterReducer), state)
) {
  const user = userEvent.setup();
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
    user,
  };
}

describe('Testa o clique dos botões', () => {
  test('Com o valor padrão do reducer, os botões devem incrementar os valores corretamente', async () => {
    const user = userEvent.setup();

    renderWithRedux(<App />);

    const incrementOne = screen.getByRole('button', { name: /incrementa 1/i });
    const incrementaFive = screen.getByRole('button', { name: /incrementa 5/i });
    expect(screen.getByText('0')).toBeInTheDocument();

    await user.click(incrementOne);
    expect(screen.getByText('1')).toBeInTheDocument();

    await user.click(incrementaFive);
    expect(screen.getByText('6')).toBeInTheDocument();
  })

  test('Iniciando o estado global com um valor personalizado, os botões devem incrementar os valores corretamente', async () => {
    const state = {
      counterReducer: {
        count: 5,
      },
    };

    const user = userEvent.setup();

    renderWithRedux(<App />, state);

    const incrementOne = screen.getByRole('button', { name: /incrementa 1/i });
    const incrementaFive = screen.getByRole('button', { name: /incrementa 5/i });
    expect(screen.getByText('5')).toBeInTheDocument();

    await user.click(incrementOne);
    expect(screen.getByText('6')).toBeInTheDocument();

    await user.click(incrementaFive);
    expect(screen.getByText('11')).toBeInTheDocument();
  })
});