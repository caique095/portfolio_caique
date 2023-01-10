// React
import { useState } from 'react';
import React from 'react';

// CSS
import './Header.css';

// MUI 
import { Button, Container } from '@mui/material';

// Components
import QuemSouEu from '../../Pages/QuemSouEu/QuemSouEu';


//React Scroll
import * as ReactScroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



export default function Header() {
  const [fixed, setFixed] = useState(false)
    const [title, setTitle] = useState("");
  const [srcImg, setSrcImg] = useState("");

  function Fixed() {
    if (window.scrollY > 95) {
      setFixed(true)
    } else {
      setFixed(false)
    }
  }

  window.addEventListener("scroll", Fixed)

  return(
     <header className="header-container">
       <section className="header">
           <div> 
             <img 
               src='IMG/logo.svg'
               height='60'
             />  
           </div>
           <nav className={fixed ? 'header-fixed' : 'nav-link'}>
             <ul className="list">
               <li className="list-link">
                 <Link to='inicio' spy={true} smooth={true} offset={-100} duration={500} id="btn-link"> Início </Link>
                 <Link to='Projetos' spy={true} smooth={true} offset={-250} duration={500} id="btn-link"> Projetos </Link>
                 <Link to='quemSouEu' id="btn-link"> <QuemSouEu srcImg={srcImg} title={title} /> </Link>
               </li>
             </ul>
           </nav>

       </section>
     </header>
  );
}