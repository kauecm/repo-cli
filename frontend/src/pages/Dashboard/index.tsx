import Footerbar from "components/Footerbar";
import Navbar from "components/NavBar";
import './styles.css'

function Dashboard(){
    return(
        <>
        <Navbar/>
        <div className="repo-div-dashboard">
            Aqui Conteudos do Painel de Controle em construção
        </div>
        <Footerbar/>
        </>
    );
}

export default Dashboard;