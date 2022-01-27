import Footerbar from "components/Footerbar";
import Navbar from "components/NavBar";
import { Link } from "react-router-dom";
import './styles.css';
import {ReactComponent as DownloadIcon} from "img/download-icon.svg";

function Result() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="button-voltar">
                    <h1>Resultado:</h1>
                    <Link to="/clientes">
                    <button type="submit" className="btn btn-primary repo-btn">Voltar</button>
                    </Link>
                </div>
                <hr />

                <div className="repo-result-clientes">
                    <p>Nome cliente:</p><p> NOME DO CLIENTE AQUI</p>
                </div>
                <div className="repo-result-clientes">
                    <p>Descrição:</p><p>DESCRIÇÃO DO CLIENTE</p>
                </div>
                <div className="repo-result-clientes">
                    <p>Tipo Cliente:</p><p>Tipo do cliente</p>
                </div>
                <hr />
                <div className="table-responsive table-pagination">
                    <table className="table table-sm table-style">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>IdQuery</th>
                                <th>SQGB</th>
                                <th>Tipo da Query</th>
                                <th>Query Link</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr>
                                <td>1</td>
                                <td>MF4 - Movimentação atipica </td>
                                <td>Postgresql</td>
                                <td>Regra</td>
                                <td><DownloadIcon/></td>
                            </tr>
                        </tbody>
                        <tbody >
                            <tr>
                                <td>1</td>
                                <td>MF4 - Movimentação atipica </td>
                                <td>Postgresql</td>
                                <td>Regra</td>
                                <td><DownloadIcon/></td>
                            </tr>
                        </tbody>
                        <tbody >
                            <tr>
                                <td>1</td>
                                <td>MF4 - Movimentação atipica </td>
                                <td>Postgresql</td>
                                <td>Regra</td>
                                <td><DownloadIcon/></td>
                            </tr>
                        </tbody>
                        <tbody >
                            <tr>
                                <td>1</td>
                                <td>MF4 - Movimentação atipica </td>
                                <td>Postgresql</td>
                                <td>Regra</td>
                                <td><DownloadIcon/></td>
                            </tr>
                        </tbody>
                        <tbody >
                            <tr>
                                <td>1</td>
                                <td>MF4 - Movimentação atipica </td>
                                <td>Postgresql</td>
                                <td>Regra</td>
                                <td><DownloadIcon/></td>
                            </tr>
                        </tbody>
                        <tbody >
                            <tr>
                                <td>1</td>
                                <td>MF4 - Movimentação atipica </td>
                                <td>Postgresql</td>
                                <td>Regra</td>
                                <td><DownloadIcon/></td>
                            </tr>
                        </tbody>
                        <tbody >
                            <tr>
                                <td>1</td>
                                <td>MF4 - Movimentação atipica </td>
                                <td>Postgresql</td>
                                <td>Regra</td>
                                <td><DownloadIcon/></td>
                            </tr>
                        </tbody>
                       
                    </table>
                </div>

                <div className=" d-flex justify-content-center">
                    <nav>
                        <ul className="pagination">
                            <li className="page-item">
                                <button className="page-link">Anterior</button>
                            </li>
                            <li className="page-item disabled">
                                <span className="page-link">1</span>
                            </li>
                            <li className="page-item disabled">
                                <button className="page-link">Próxima</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <Footerbar />

        </>);
}

export default Result;