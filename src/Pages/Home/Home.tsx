// CSS
import './Home.css';

// React
import { useState } from 'react';

// Components
import Header from '../../Components/Header/Header';
import Inicio from '../../Components/Inicio/Inicio';
import ProjetoLista from '../../Components/Projetos/ProjetoLista/ProjetoLista';
import Contato from '../../Components/Contato/Contato';
import Footer from '../../Components/Footer/Footer';
import QuemSouEu from '../QuemSouEu/QuemSouEu';

// MUI
import { Container } from '@mui/material';


// Swiper Slider
import { SwiperProps, SwiperSlide } from 'swiper/react'; 



export default function Home() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [srcImg, setSrcImg] = useState("");

    const settings: SwiperProps = {
        spaceBetween: 50,
        slidesPerView: 1,
        navigation: true,
        pagination: {
            clickable: true,
        },
      };

    return(
        <div className="App">
            <Header />
            <Inicio />
            <article className="projetos-titulo">
                <span>Meus projetos:</span>
            </article>
            <ProjetoLista srcImg={srcImg} title={title} description={description} />
            
            <article className="contato-titulo">
                <span>Contato:</span>
            </article>
            <Contato />
            <Footer />
        </div>
    )
}