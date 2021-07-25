import './App.css';
import Comp from './Comp';
import GrandChildCompo from './GrandChildCompo'

function App() {
  console.log("testing changes");
  return (
    <div className="App">
      <Comp />
      <GrandChildCompo />
    </div>
  );
}

export default App;
