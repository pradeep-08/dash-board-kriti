import "./App.css";
import Nav from "./pages/nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tickets from "./pages/service/tickets";
import Dashboard from "./pages/dashboard/dashboard";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tickets" element={<Tickets />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
