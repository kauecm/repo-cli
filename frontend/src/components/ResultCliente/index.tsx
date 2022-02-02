/* eslint-disable array-callback-return */
import Footerbar from "components/Footerbar";
import Navbar from "components/NavBar";
import { Link } from "react-router-dom";
import './styles.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "utils/requests";
import { Cliente } from "types/movie";
import DataTable from "components/DataTable";

type Props = {
    clienteId: string;
}


function ResultCliente({ clienteId }: Props) {

    const [cliente, setCliente] = useState<Cliente>();


    useEffect(() => {
        axios.get(`${BASE_URL}/clientes/${clienteId}`)
        .then(response =>{
            setCliente(response.data);
            console.log(response.status);
        })
    }, [clienteId]);

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

                <div className="repo-result-clientes" >
                    <p>Nome cliente:</p><p>{cliente?.nome}</p>
                </div>
                <div className="repo-result-clientes">
                    <p>Tipo Cliente:</p><p>{cliente?.tipoCliente}</p>

                </div>
                <div>


                </div>



                <hr />
                <DataTable clienteId={`${clienteId}`} />


            </div>

            <Footerbar />

        </>);
}

export default ResultCliente;