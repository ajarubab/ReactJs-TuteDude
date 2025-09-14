import './App.css';
import Greet  from './Components/Greet';
import AgainGreet from './Components/AgainGreet';
import LastGreet from './Components/LastGreet';
import ClassComp1 from './Components/ClassComp1';
import ClassComp2 from './Components/ClassComp2';

function App() {
  return (
    <div className="App">
        <Greet/>
        <AgainGreet/>
        <LastGreet/>
        <ClassComp1/>
        <ClassComp2/>
    </div>
  );
}

export default App;
