import logo from './logo.svg';
import './App.css';
import Greet  from './Components/Greet';
import AgainGreet from './Components/AgainGreet';
import LastGreet from './Components/LastGreet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greet/>
        <AgainGreet/>
        <LastGreet/>
      </header>
    </div>
  );
}

export default App;
