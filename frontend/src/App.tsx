import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from 'pages/Home';
import Clientes from 'pages/Clientes';
import Result from "pages/Result";
import Dashboard from "pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/clientes/result">
          <Route path=":clienteId" element={<Result/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
