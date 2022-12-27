// CSS
import './Header.css';

// MUI 
import {Button, Container} from '@mui/material';

export default function Header() {
  return(
    <Container>
      <section className="header">
          <div> 
            <img 
              src='IMG/logo.svg'
              height='60'
            />  
          </div>
          <nav className="nav-link">
            <ul className="list">
              <li className="list-link">
                <Button id="btn-link" href="#">Início</Button>
                <Button id="btn-link" href="#">Projetos</Button>
                <Button id="btn-link" href="#">Quem sou eu?</Button>
              </li>
            </ul>
          </nav>
      </section>
    </Container>
  )
}