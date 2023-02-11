// CSS
import './Inicio.css';

// MUI
import { Container } from '@mui/material';
import SouthIcon from '@mui/icons-material/South';

// React Scroll
import * as ReactScroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



export default function Inicio() {
    return (
        <Container>
            
            <div className="area" >
                <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                </ul>
            </div >
            
            <section className="inicio" id="inicio">

                <aside className="foto-inicio_mobile-container">
                        <img 
                            src="IMG/foto_inicio.png"
                            className="foto-inicio"
                        />
                    </aside>
                <article className="inicio-txt">
                    <span className="titulo"> Olá, meu nome é <span className="span-titulo">Caíque.</span> 🤘🏼</span>
                    <span className="texto">Sou <span className="span-texto">desenvolvedor front-end</span> e estou constantemente aprendendo e praticando, desenvolvo interfaces modernas, práticas e de alta qualidade, concentrado em performance, responsividade e SEO.</span>

                    <div className="btn-inicio">
                        <Link to='Contato' id='btn-inicio_contato' spy={true} smooth={true} offset={-250} duration={500}> Contato </Link>
                        <Link to='Projetos' id='btn-inicio_projetos' spy={true} smooth={true} offset={-250} duration={500}> Projetos </Link>
                    </div>
                </article>
                </section>
                <div className="border"></div>

                <section className="inicio-txt_mobile" id="inicio">
                    <article className="inicio-txt_mobile-campo_texto">
                        <span className="titulo_mobile"> Olá, meu nome é <span className="span-titulo_mobile">Caíque</span><span className="emoji">🤘🏼</span></span>
                
                    <div className="campo-texto_mobile">
                        <span className="texto_mobile">Sou apaixonado por tecnologia e Design, estou constantemente aprendendo e praticando.</span>
                    </div>
                </article>

                <aside className="foto-inicio_mobile-container">
                    <img 
                        src="IMG/foto_inicio.png"
                        className="foto-inicio_mobile"
                    />
                </aside>

                <div className="btn-inicio_mobile">
                    <img 
                        src="IMG/scroll_black.svg"
                        className="scroll-down"
                    />
                    <p className="scrol-down_titulo"> Deslize para saber mais.</p>
                </div>

            </section>
        </Container>
    )
}