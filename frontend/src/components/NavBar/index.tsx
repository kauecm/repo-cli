/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import './styles.css';
function Navbar(){
    return(
        <header>
        <nav className="container">
          <div className="repo-nav-content">
            <Link to="/">
            <h1>REPO-CLI</h1>
            </Link>
            <div className='repo-contact-container'>
            <Link to="/clientes">
            <a href="#">
               <div >
                 <p >Clientes</p>
               </div>
            </a>            
            </Link>
            <Link to="/dashboard">
            <a href="#">
               <div>
                 <p >Painel de Controle</p>
               </div>
            </a>
            </Link>
            </div>
          </div>
        </nav>
   
      </header>

    );
}

export default Navbar;