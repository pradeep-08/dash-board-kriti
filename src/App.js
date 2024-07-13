import './App.css';
import Card from './pages/card';
import Chart from './pages/chart';
import Nav from  './pages/nav'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tickets from "./pages/service/tickets";

function App() {
  return (
    <div className="App">
     <Nav />
     <Router>
      <Routes>
        <Route path="/tickets" element={<Tickets />}></Route>
      </Routes>
    </Router>
     <Chart/>
     <Card/>
    </div>
  );
}

export default App;
