import Footerbar from "components/Footerbar";
import Navbar from "components/NavBar";
import './styles.css'
function Home(){
    return(
        <>
        <Navbar/>
        <div className="div-home">Pagina inicial - aqui conteudo legal :) </div>
        <Footerbar/>
        </>
        

    );
}

export default Home;