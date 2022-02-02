import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "utils/requests";
import { Cliente } from "types/movie";
import {ReactComponent as Download} from 'img/download-icon.svg'


type Props = {
    clienteId: string;
}

function DataTable({ clienteId }: Props) {

    const [cliente, setCliente] = useState<Cliente>();


    useEffect(() => {
        axios.get(`${BASE_URL}/clientes/${clienteId}`)
            .then(response => {
                setCliente(response.data);
                console.log(response.status);
            })
    }, [clienteId]);

    return (
        <div className="table-responsive ">
            <table className="table table-sm  table-pagination">
                <thead>
                    <tr>
                        <th >IdQuery</th>
                        <th >Nome Query</th>
                        <th >Descrição</th>
                        <th >SQGB</th>
                        <th >Tipo da Query</th>
                        <td >Download</td>
                    </tr>
                </thead>
                <tbody >
                    {cliente?.query.map(item => (
                        <tr key={item.id}>
                            <td>{item.idQuery}</td>
                            <td>{item.nome}</td>
                            <td>{item.descricao}</td>
                            <td>{item.sqgb}</td>
                            <td>{item.tipoQuery}</td>
                            <a href={`${item.urlQuery}`}>
                            <td><Download/></td>
                            </a>
                        </tr>
                    ))}


                </tbody>
            </table>
        </div>
    );
}

export default DataTable;