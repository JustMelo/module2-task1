import './App.css';
import Portfolio from './components/portfolio/Portfolio';
import { Data } from './mock/data';

function App() {
  return (
    <div className="App">
      <Portfolio data={Data}/>
    </div>
  );
}

export default App;
