import Navbar from "components/NavBar";

function Result(){
    return(
    <>
    <Navbar/>
    <div className="container">
        <div className="repo-result-clientes">
        <p>Nome cliente:</p><p> NOME DO CLIENTE AQUI</p>
        <p>Descrição:</p><p>DESCRIÇÃO DO CLIENTE</p>
        </div>
    </div>
    
    </>);
}

export default Result;