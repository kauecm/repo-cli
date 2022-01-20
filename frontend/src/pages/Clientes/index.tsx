import Navbar from "components/NavBar";
import { Link } from "react-router-dom";
import "./styles.css";
function Clientes() {
    return (

        <>
            <Navbar />
            <div className="container ">
                <div className="repo-termos"> <h1>Termos de Busca</h1> </div>
                <hr />

                <div className="repo-termo-busca-container">
                    <p>Buscar clientes por nome</p>
                    <input className="input" type="text" />
                    <div>
                        <Link to="/clientes/result">
                            <button type="submit" className="btn btn-primary repo-btn">Buscar</button>
                        </Link>
                    </div>
                </div>

                <div className="repo-termo-busca-container">
                    <p>Buscar regra por id</p>
                    <input className="input" type="text" />
                    <div>
                        <Link to="/clientes/result">
                            <button type="submit" className="btn btn-primary repo-btn">Buscar</button>
                        </Link></div>
                </div>

            </div>






        </>

    );
}
export default Clientes;
