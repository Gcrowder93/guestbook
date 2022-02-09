import { render, screen } from '@testing-library/react';
import App from './App';
import { EntryProvider } from './Context/EntryContext';
import { UserProvider } from './Context/UserContext';

test('renders learn react link', () => {
  render(
    <UserProvider>
      <EntryProvider>
        <App />
      </EntryProvider>
    </UserProvider>
  );
  const linkElement = screen.getByText(/add an entry/i);
  expect(linkElement).toBeInTheDocument();
});
