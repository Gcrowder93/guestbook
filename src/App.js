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
    </div>
  );
}

export default App;
