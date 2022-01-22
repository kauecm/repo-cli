import Footerbar from "components/Footerbar";
import Navbar from "components/NavBar";
import { Link } from "react-router-dom";
import "./styles.css";
import { ReactComponent as IconLupa } from "img/icon-zoom-in.svg";
import Pagination from "components/Pagination";
function Clientes() {
    return (

        <>
            <Navbar />
            <div className="container repo-div-container">
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

                <div className="table-responsive">
                    <table className="table table-sm">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Cliente</th>
                                <th>Descrição</th>
                                <th>Tipo de Cliente</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr>
                                <td>1</td>
                                <td>Semparar</td>
                                <td>Sem pressa</td>
                                <td>Pedagio</td>
                                <Link to="/">
                                    <td><IconLupa /></td></Link>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Semparar</td>
                                <td>Sem pressa</td>
                                <td>Pedagio</td>
                                <Link to="/">
                                    <td><IconLupa /></td></Link>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Semparar</td>
                                <td>Sem pressa</td>
                                <td>Pedagio</td>
                                <Link to="/">
                                    <td><IconLupa /></td></Link>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Semparar</td>
                                <td>Sem pressa</td>
                                <td>Pedagio</td>
                                <Link to="/">
                                    <td><IconLupa /></td></Link>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Semparar</td>
                                <td>Sem pressa</td>
                                <td>Pedagio</td>
                                <Link to="/">
                                    <td><IconLupa /></td></Link>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Semparar</td>
                                <td>Sem pressa</td>
                                <td>Pedagio</td>
                                <Link to="/">
                                    <td><IconLupa /></td></Link>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Semparar</td>
                                <td>Sem pressa</td>
                                <td>Pedagio</td>
                                <Link to="/">
                                    <td><IconLupa /></td></Link>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Semparar</td>
                                <td>Sem pressa</td>
                                <td>Pedagio</td>
                                <Link to="/">
                                    <td><IconLupa /></td></Link>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="pagination-content">
                    <Pagination />
                </div>
            </div>




            <Footerbar />






        </>

    );
}
export default Clientes;
