// CSS
import './HabilidadeLista.css'

// React
import { useState } from 'react';
import { ListFormat } from 'typescript';

// Components
import QuemSouEu from '../QuemSouEu';

//JSON
import habilidades from '../HabilidadesLista.json';

// MUI
import { Container } from '@mui/material';
import Habilidades from '../Habilidades/Habilidades';



interface Props {
    srcImg: string,
    title: string,
}

export default function HabilidadesLista(props: Props) {
    const [lista, setLista] = useState(habilidades);
    
    return(
        <Container>
        <section className="habilidades-lista-icones">
            {lista.map(item => (
                <div className="">
                    <Habilidades key={item.title} {...item} />
                </div>
            ))}
        </section>
        </Container>
    )
}