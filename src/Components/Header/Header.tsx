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
  const [fix, setFix] = useState(false)
  const [title, setTitle] = useState("");
  const [srcImg, setSrcImg] = useState("");

  function Fixed() {
    if (window.scrollY > 80) {
      setFix(true)
    } else {
      setFix(false)
    }
  }

  window.addEventListener("scroll", Fixed)

  return(
    <>
      <section className="header_desktop">
        <div className="logo"> 
          <img 
            src='IMG/logo.svg'
            height='60'
          />  
        </div>

        <header className="header-container_desktop">
          <section className="header">
            <ul className="list">
              <li className="list-link">
                <Link to='inicio' spy={true} smooth={true} offset={-100} duration={500} id="btn-link"> Início </Link>
                <Link to='Projetos' spy={true} smooth={true} offset={-250} duration={500} id="btn-link"> Projetos </Link>
                <Link to='Contato' spy={true} smooth={true} offset={-250} duration={500} id="btn-link"> Contato </Link>
                <Link to='quemSouEu' id="btn-link_sobre-mim_header"> <QuemSouEu srcImg={srcImg} title={title}/> </Link>
              </li>
            </ul>
          </section>
        </header>
      </section>

      <section className="header_mobile">

        <div className="logo_mobile"> 
          <img 
            src='IMG/logo.svg'
            height='60'
          />  
        </div>

        <nav className={fix? 'header-fixed' : ''}>
          <header className="header_mobile">
            <ul className="list_mobile">
              <li className="list-link_mobile">
                <Link to='inicio' spy={true} smooth={true} offset={-100} duration={500} id="btn-link_mobile"> Início </Link>
                <Link to='Projetos' spy={true} smooth={true} offset={-250} duration={500} id="btn-link_mobile"> Projetos </Link>
                <Link to='Contato' spy={true} smooth={true} offset={-250} duration={500} id="btn-link_mobile"> Contato </Link>
                <Link to='quemSouEu' id="btn-link_sobre-mim_mobile"> <QuemSouEu srcImg={srcImg} title={title}/> </Link>
              </li>
            </ul>
          </header>
        </nav>

      </section>
     </>
  );
}