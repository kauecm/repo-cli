import './styles.css';
import { ReactComponent as GitHubIcon } from 'img/github.svg';
function Footerbar() {
    return (
        <footer className="repo-footer">
            <nav className="container">
                <div className="repo-div-credentials">
                    <a href="https://github.com/kauecm" target="_blank" rel="noreferrer">
                        <div className="repo-credentials">
                            <GitHubIcon />
                            <h1 className="repo-credentials-link">/kauecm</h1>
                        </div>
                    </a>

                </div>
            </nav>
        </footer>
    );
}

export default Footerbar;
