import "./App.css";
import Nav from "./pages/nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tickets from "./pages/service/tickets";
import Dashboard from "./pages/dashboard/dashboard";
import Contact from "./pages/service/contact";
import Help from "./pages/service/help";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Help" element={<Help />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
