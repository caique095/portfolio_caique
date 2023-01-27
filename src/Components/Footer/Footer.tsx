//CSS
import './Footer.css';

// MUI
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

//React Scroll
import * as ReactScroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export default function Footer() {
    return(
        <section className='footer'>
            <aside className="img-footer"> 
                <a>
                <Link to='inicio' spy={true} smooth={true} offset={-10000} duration={2000} id="btn-link"> 
                    <img 
                    src="IMG/logo_branca.svg"
                    className="img-footer-photo"
                    />
                </Link>
                </a>
            </aside>

            <article className="icones-footer">
                <ul className="icones-lista">
                    <li>
                        <a href="https://www.linkedin.com/in/ca%C3%ADque-am%C3%A9rico-95946b234/" id="btn-footer"><LinkedInIcon fontSize="large"/></a>
                    </li>
                    <li>
                        <a href="https://github.com/caique095" id="btn-footer"><GitHubIcon fontSize="large"/></a>
                    </li>
                </ul>
            </article>
        </section>
    )
}