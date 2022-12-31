// CSS
import './Inicio.css';

// MUI
import { Button, Container } from '@mui/material';

export default function Inicio() {
    return (
        <Container>
            <section className="inicio">
                <aside>
                    <img 
                        src="IMG/foto_inicio.png"
                        height='250'
                        className="foto-inicio"
                    />
                </aside>
                
                <article className="inicio-txt">
                    <span className="titulo"> Olá, meu nome é <span className="span-titulo">Caíque.</span> 🤘🏼</span>
                    <span className="texto">Sou <span className="span-texto">desenvolvedor front-end</span> e estou constantemente aprendendo e praticando, Gosto de produzir softwares bonitos e extremamente práticos.</span>

                    <div className="btn-inicio">
                        <Button href="#" id='btn-inicio_contato'>Contato</Button>
                        <Button href="#" id='btn-inicio_projetos'>Projetos</Button>
                    </div>
                </article>
            </section>
        </Container>
    )
}