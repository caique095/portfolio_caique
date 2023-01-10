
// React
import { useState } from 'react';

// Components
import Header from './Components/Header/Header';
import Inicio from './Components/Inicio/Inicio';
import ProjetoLista from './Components/Projetos/ProjetoLista/ProjetoLista';
import Footer from './Components/Footer/Footer';

// MUI
import { Container } from '@mui/material';

// Router Dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import QuemSouEu from './Pages/QuemSouEu/QuemSouEu';


function App() {
  const [title, setTitle] = useState("");
  const [srcImg, setSrcImg] = useState("");
  
  
  return(
    <main>
      <Router>
        <Routes>
          <Route path="quemSouEu" element={ <QuemSouEu title={title} srcImg={srcImg} /> } />
        </Routes>
      </Router>
  </main>
  )
}

export default App;
