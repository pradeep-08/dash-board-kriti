import './App.css';
import Card from './pages/card';
import Chart from './pages/chart';
import Nav from  './pages/nav'

function App() {
  return (
    <div className="App">
     <Nav />
     <Chart/>
     <Card/>
    </div>
  );
}

export default App;
