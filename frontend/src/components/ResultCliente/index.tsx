/* eslint-disable array-callback-return */
import Footerbar from "components/Footerbar";
import Navbar from "components/NavBar";
import { Link } from "react-router-dom";
import './styles.css';
import { ReactComponent as DownloadIcon } from "img/download-icon.svg";
import { Cliente, Query } from "types/movie";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "utils/requests";

type Props = {
    clienteId: string;
}


function ResultCliente({ clienteId }: Props) {

    const [query, setQuery] = useState<Query>();
    const [cliente, setCliente] = useState<Cliente>();
    useEffect(() => {
        axios.get(`${BASE_URL}/clientes/${clienteId}`)
            .then(response => {
                setCliente(response.data);
                setQuery(response.data);
            });
    }, []);





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
                    <p>Nome cliente:</p><p>{cliente?.nome}</p>
                </div>
                <div className="repo-result-clientes">
                    <p>Tipo Cliente:</p><p>{cliente?.tipoCliente}</p>
                
                </div>
                <hr />
                <div className="table-responsive table-pagination">
                    <table className="table table-sm table-style">
                        <thead>

                            <tr>
                                <th>ID</th>
                                <th>IdQuery</th>
                                <th>nome</th>
                                <th>Descrição</th>
                                <th>SQGB</th>
                                <th>Tipo da Query</th>
                                <th>Query Link</th>
                                <th></th>
                            </tr>


                        </thead>
                        <tbody >
                            {cliente?.query.map(x => {
                                <tr key={cliente.id}>
                                    <td>{x.id}</td>
                                    <td>{x.idQuery}</td>
                                    <td>{x.descricao}</td>
                                    <td>{x.nome}</td>
                                    <td>{x.sqgb}</td>
                                    <td>{x.tipoQuery}</td>
                                    <td>{x.urlQuery}</td>
                                </tr>
                            })}




                        </tbody>

                    </table>
                </div>


            </div>

            <Footerbar />

        </>);
}

export default ResultCliente;