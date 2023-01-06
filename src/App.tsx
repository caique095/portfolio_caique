// CSS
import './App.css';

// React
import { useState } from 'react';

// Components
import Header from './Components/Header/Header';
import Inicio from './Components/Inicio/Inicio';
import ProjetoLista from './Components/Projetos/ProjetoLista/ProjetoLista';
import Footer from './Components/Footer/Footer';

// MUI
import { Container } from '@mui/material';

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [srcImg, setSrcImg] = useState("");
  const [subtitle, setSubtitle] = useState("");
  
  return (
   <div className="App">
        <Header />
        <Inicio />
        <article className="projetos-titulo">
                <span>Meus projetos:</span>
        </article>
        <ProjetoLista srcImg={srcImg} title={title} description={description} />
        <Footer />

    </div>
  );
}

export default App;
