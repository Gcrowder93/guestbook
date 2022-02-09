import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { EntryProvider } from './Context/EntryContext';
import { UserProvider } from './Context/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <EntryProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </EntryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
