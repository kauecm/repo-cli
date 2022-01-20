import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from 'pages/Home';
import Clientes from 'pages/Clientes';
import Navbar from "components/NavBar";
import Dashboard from "pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clientes" element={<Clientes />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
