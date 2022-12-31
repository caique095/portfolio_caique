// React
import { useState } from 'react';
import { ListFormat } from 'typescript';

// Components
import Projetos from '../Projetos';

//JSON
import projetos from '../projetos.json';

//CSS
import './ProjetoLista.css';

// MUI
import { Container } from '@mui/material';


interface Props {
    srcImg: string,
    title: string,
    description: string
}

export default function ProjetoLista(props: Props) {
    const [lista, setLista] = useState(projetos);
    
    return(
        <Container>
        <section className="projeto-lista">
            {lista.map(item => (
                <div className="">
                    <Projetos key={item.title} {...item} />
                </div>
            ))};
        </section>
        </Container>
    )
};