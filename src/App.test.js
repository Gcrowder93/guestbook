import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import App from './App';
import { EntryProvider } from './Context/EntryContext';
import { UserProvider } from './Context/UserContext';
import Home from './Views/Home';

test('renders learn react link', () => {
  render(
    <EntryProvider>
      <UserProvider>
        <Home />
      </UserProvider>
    </EntryProvider>
  );
  const linkElement = screen.getByText(/add an entry/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the actions', async () => {
  render(
    <EntryProvider>
      <UserProvider>
        <Home />
      </UserProvider>
    </EntryProvider>
  );

  const button = screen.getByRole('button', { name: /submit/i });
  const entryText = screen.getByPlaceholderText(/message/i);
  const userInput = screen.getByPlaceholderText(/name/i);
  userEvent.type(entryText, 'hello');
  userEvent.type(userInput, 'chase');
  userEvent.click(button);
  const entry = await screen.findByText(/thanks for the message/i);
  expect(entry).toBeInTheDocument();
});
