// CSS
import './Inicio.css';

export default function Inicio() {
    return (
        <section className="inicio">
            <aside>
                <img 
                    src="IMG/blob.svg"
                    className="bg-inicio"
                    height='300'
                />
            </aside>
            <article className="inicio-txt">
                <span className="titulo"> Olá, meu nome é <span className="span-titulo">Caíque.</span> 🤘🏼</span>
                <span className="texto">Sou <span className="span-texto">desenvolvedor front-end</span> e estou constantemente aprendendo e praticando, Gosto de produzir softwares bonitos e extremamente práticos.</span>
            </article>
        </section>
    )
}