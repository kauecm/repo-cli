import Footerbar from "components/Footerbar";
import Navbar from "components/NavBar";
import { Link } from "react-router-dom";
import "./styles.css";
import { ReactComponent as IconLupa } from "img/icon-zoom-in.svg";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { ClientePage } from "types/movie";
import axios from "axios";
import { BASE_URL } from "utils/requests";
function Clientes() {
        const [activePage, setActivePage]= useState(0);

        const [page, setPage] = useState<ClientePage>({
            first: true,
            last:true,
            number: 0,
            totalElements: 0,
            totalPages: 0
        });


        useEffect(() =>{
            axios.get(`${BASE_URL}/clientes?size=10&page=${activePage}`)
            .then(response =>{
                setPage(response.data);
            })
        },[activePage]);

        const changePage = (index: number)=>{
            setActivePage(index);
        }

    return (

        <>
            <Navbar />

            <div className="container" >
                <div className="repo-termos"> <h1>Termos de Busca</h1> </div>
                <hr />
                
                <div className="repo-termo-busca-container">
                    <p>Buscar clientes por nome</p>
                    <input className="input" type="text" />
                    <div>
                        <Link to="/clientes/result">
                            <button type="submit" className="btn btn-primary repo-btn">Buscar</button>
                        </Link>
                    </div>
                </div>

                <div className="repo-termo-busca-container">
                    <p>Buscar regra por id</p>
                    <input className="input" type="text" />
                    <div>
                        <Link to="/clientes/result">
                            <button type="submit" className="btn btn-primary repo-btn">Buscar</button>
                        </Link></div>
                </div>
                <hr/>
                
                
                

                <div className="table-responsive ">
                    <table className="table table-sm  table-pagination">
                        <thead>
                            <tr>
                                <th >Id</th>
                                <th >Cliente</th>
                                <th >Tipo de Cliente</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody >
                            { page.content?.map(item =>(
                                <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.tipoCliente}</td>
                                <Link to={`/clientes/result/${item.id}`}>
                                    <td><IconLupa /></td></Link>
                            </tr>
                            ))}
                            
                            
                        </tbody>                       
                    </table>
                    <Pagination page={page} onPageChange={changePage} />
                </div>
                </div>
                    
            <Footerbar />

        </>

    );
}
export default Clientes;
