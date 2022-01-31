import { useParams } from "react-router-dom";
import ResultCliente from "components/ResultCliente";


function Result() {

    const params = useParams();


    return (
        <ResultCliente clienteId={`${params.clienteId}`} />
    );
}

export default Result;