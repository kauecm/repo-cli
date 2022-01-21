import './styles.css';
import {ReactComponent as GitHubIcon} from 'img/github.svg';
function Footerbar(){
    return (
        <footer className="p-3 repo-footer">
                <div className="container">
                    <a href="https://github.com/kauecm" target="_blank" rel="noreferrer">
                        <div className="infos">
                            <GitHubIcon/>
                            <a className="text">/kauecm</a>
                        </div>
                     </a>
                    
                </div>
            
        </footer>
    );
}

export default Footerbar;
