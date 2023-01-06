//CSS
import './Footer.css';

// MUI
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function Footer() {
    return(
        <section className='footer'>
            <aside className="img-footer"> 
                <a>
                    <img 
                    src="IMG/logo_branca.svg"
                    className="img-footer-photo"
                    />
                </a>
            </aside>

            <article className="icones-footer">
                <ul className="icones-lista">
                    <li>
                        <LinkedInIcon fontSize="large"/>
                    </li>
                    <li>
                        <GitHubIcon fontSize="large"/>
                    </li>
                </ul>
            </article>
        </section>
    )
}