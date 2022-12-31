// React
import { useState } from 'react';

// CSS
import './Header.css';

// MUI 
import {Button, Container} from '@mui/material';

export default function Header() {
  const [fixed, setFixed] = useState(false)

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
                  <Button id="btn-link" className="button" href="#">Início</Button>
                  <Button id="btn-link" href="#">Projetos</Button>
                  <Button id="btn-link" href="#">Quem sou eu?</Button>
                </li>
              </ul>
            </nav>

        </section>
      </header>
  )
}