
// CSS
import './Habilidades.css'

// JSON
import lista from '../HabilidadesLista.json';

type Props = typeof lista[0];


export default function Habilidades(props: Props) {
    const { title, srcImg } = props;

    return(
        <section className="habilidades">
            <div className="habilidades-card">
                <p className="habilidades-card-titulo">{title}</p>
                    <img
                    src={srcImg}
                    className="habilidades-icon"
                    />
            </div>
        </section>
    )
}