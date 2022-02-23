import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Views/Home';
import Auth from './Views/Auth/Auth';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import DarkModeToggle from './Components/DarkMode/DarkModeToggle';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <DarkModeToggle />
      </div>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Auth />
          </Route>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
      {/* <footer className="footer">Created 02/10/2022</footer> */}
    </div>
  );
}

export default App;
