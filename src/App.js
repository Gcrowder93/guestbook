import './App.css';
import Home from './Views/Home';
import DarkModeToggle from './Components/DarkMode/DarkModeToggle';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <DarkModeToggle />
      </div>
      <Home />
      <footer className="footer">Created 02/10/2022</footer>
    </div>
  );
}

export default App;
