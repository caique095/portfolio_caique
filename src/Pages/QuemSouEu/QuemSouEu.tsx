//React
import * as React from 'react';

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

// JSON
import lista from './HabilidadesLista.json';

// Component 
import HabilidadesLista from '../QuemSouEu/HabilidadesLista/HabilidadesLista';

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
      <Button id="btn-link" onClick={handleClickOpen}>
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
            <main className="quem-sou-eu">
                <section className="sobre">
                    <article className="sobre-campo_texto">
                        <h1 className="sobre-titulo">Olá, meu nome é <span className="sobre-titulo_span">Caíque Américo.</span></h1>
                        <p className="sobre-texto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, excepturi neque. Dolorem veritatis, aliquid corrupti numquam molestias saepe id, nostrum reprehenderit sequi officiis officia facere ab, sed voluptatum eum. Officiis.</p>
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
               
            </main>
      </Dialog>
    </div>
  );
}