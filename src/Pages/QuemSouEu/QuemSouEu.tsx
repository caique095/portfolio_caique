//React
import * as React from 'react';
import { useEffect } from 'react';

// CSS
import './QuemSouEu.css'

// MUI
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import { Container } from '@mui/material';

// JSON
import lista from './HabilidadesLista.json';

// Component 
import HabilidadesLista from '../QuemSouEu/HabilidadesLista/HabilidadesLista';
import Experiencia from './Experiencia/Experiencia';

//AOS
import Aos from "aos";
import "aos/dist/aos.css";


type Props = typeof lista[0];

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props: Props) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
}, []);

  const { title, srcImg } = props;

  const [open, setOpen] = React.useState(false);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <div>
        <Button endIcon={<EmojiPeopleIcon/>} id="btn-link-sobre_mim" onClick={handleClickOpen}>
          Quem sou eu?
        </Button>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
        <AppBar sx={{ position: 'relative' }}  id="appbar">
          <Button autoFocus color="inherit" onClick={handleClose} startIcon={<ArrowBackOutlinedIcon/>} id="dialog-btn-voltar">
            Voltar  
          </Button>
        </AppBar>
        <Container>
          <main className="quem-sou-eu">
            <section className="sobre">
              <article className="sobre-campo_texto">
                <h1 className="sobre-titulo" >Olá, meu nome é <span className="sobre-titulo_span" data-aos="zoom-out"> Caíque Américo.</span></h1>
                  <p className="sobre-texto">Desde cedo sou apaixonado pela comunicação artistica e sempre transmiti minhas ideias através do Graffiti, onde participei por anos de diversas atividades urbanas pela cidade do Rio de Janeiro. <br/><br/>
                    Essa paixão pela arte me trouxe até o desenvolvimento front-end e hoje em dia não descanso até colocar meus fones de ouvido e transformar todas minhas ideias malucas em códigos. </p>
              </article>
              <aside className="sobre-img">
                <img 
                  src="IMG/foto_inicio2.png"
                  height='350'
                  />
              </aside>
            </section>

            <section className="habilidade-lista">
              <h1 className="habilidades-lista-titulo">Habilidades:</h1>
                <HabilidadesLista title={title} srcImg={srcImg} />
            </section> 
            
            <section className="experiencia-lista"> 
              <h1 className="experiencias-lista-titulo">Experiências:</h1>               
                <Experiencia />
            </section>

          </main>
          </Container>
        </Dialog>
    </div>
  );
}