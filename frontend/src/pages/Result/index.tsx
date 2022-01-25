import Footerbar from "components/Footerbar";
import Navbar from "components/NavBar";
import './styles.css';

function Result(){
    return(
    <>
    <Navbar/>
    <div className="container">
        <div>
            <h1>Resultado:</h1>
        </div>
        <hr/>
    
        <div className="repo-result-clientes">
        <p>Nome cliente:</p><p> NOME DO CLIENTE AQUI</p>
        </div>
        <div className="repo-result-clientes">
        <p>Descrição:</p><p>DESCRIÇÃO DO CLIENTE</p>
        </div>
        <div className="repo-result-clientes">
        <p>Tipo Cliente:</p><p>Tipo do cliente</p>
        </div>
        <hr/>
        <div className="table-responsive table-pagination">
                    <table className="table table-sm ">
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
                                <td>www.linkParaDownloadDaRegra.com.br</td>
                            </tr>
                        </tbody>
                        <tbody >
                            <tr>
                                <td>1</td>
                                <td>MF6 - Movimentação atipica com contraparte</td>
                                <td>Postgresql</td>
                                <td>Regra</td>
                                <td>www.linkParaDownloadDaRegra.com.br</td>
                            </tr>
                        </tbody>
                        <tbody >
                            <tr>
                                <td>1</td>
                                <td>MF6 - Movimentação atipica com contraparte</td>
                                <td>Postgresql</td>
                                <td>Regra</td>
                                <td>www.linkParaDownloadDaRegra.com.br</td>
                            </tr>
                        </tbody>
                        <tbody >
                            <tr>
                                <td>1</td>
                                <td>MF6 - Movimentação atipica com contraparte</td>
                                <td>Postgresql</td>
                                <td>Regra</td>
                                <td>www.linkParaDownloadDaRegra.com.br</td>
                            </tr>
                        </tbody>
                        <tbody >
                            <tr>
                                <td>1</td>
                                <td>MF6 - Movimentação atipica com contraparte</td>
                                <td>Postgresql</td>
                                <td>Regra</td>
                                <td>www.linkParaDownloadDaRegra.com.br</td>
                            </tr>
                        </tbody>
                        <tbody >
                            <tr>
                                <td>1</td>
                                <td>MF6 - Movimentação atipica com contraparte</td>
                                <td>Postgresql</td>
                                <td>Regra</td>
                                <td>www.linkParaDownloadDaRegra.com.br</td>
                            </tr>
                        </tbody>
                        <tbody >
                            <tr>
                                <td>1</td>
                                <td>MF6 - Movimentação atipica com contraparte</td>
                                <td>Postgresql</td>
                                <td>Regra</td>
                                <td>www.linkParaDownloadDaRegra.com.br</td>
                            </tr>
                        </tbody>
                        <tbody >
                            <tr>
                                <td>1</td>
                                <td>MF6 - Movimentação atipica com contraparte</td>
                                <td>Postgresql</td>
                                <td>Regra</td>
                                <td>www.linkParaDownloadDaRegra.com.br</td>
                            </tr>
                        </tbody>
                        <tbody >
                            <tr>
                                <td>1</td>
                                <td>MF6 - Movimentação atipica com contraparte</td>
                                <td>Postgresql</td>
                                <td>Regra</td>
                                <td>www.linkParaDownloadDaRegra.com.br</td>
                            </tr>
                        </tbody>
                        </table> 
                        </div>
                        
                        
    </div>

    <Footerbar/>
    
    </>);
}

export default Result;