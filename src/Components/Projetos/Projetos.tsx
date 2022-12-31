// React
import * as React from 'react';

// CSS
import './Projetos.css';

//MUI
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { Title } from '@mui/icons-material';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';




import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';




// JSON
import projetos from './projetos.json';


type Props = typeof projetos[0];

// ===== MODAL ===== 


function ScrollDialog(props: Props) {
  const { title, srcImg, description, subtitle } = props;
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button onClick={handleClickOpen('paper')} id="projetos-btn-link" endIcon={<ArrowForwardIcon/>}>Saiba mais</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title" className="dialog-title">{title}</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText>
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} id="dialog-btn-repositorio" endIcon={<GitHubIcon/>}>Acessar repositório</Button>
          <Button onClick={handleClose} id="dialog-btn-abrir_projeto" endIcon={<LanguageIcon/>}>Acessar projeto</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}








// MODAAL 2 


// const style = {
//   position: 'absolute' as 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: '#fcfffc',
//   boxShadow: 24,
//   p: 4,
// };

  function BasicModal(props: Props) {
  const { title, srcImg, description, subtitle } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal-item"
      >
        <Box className="modal">
            <div className="modal-img">
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <img 
                        src={srcImg}
                        className="modal-img_photo"
                    />
            
                </Typography>
            </div>
            <div className="modal-texto">
                <Typography id="modal-modal-title">
                    {title}
                </Typography>
                <Typography>
                    {description}
                </Typography>

                <div className="modal-btn">
                    <Button onClick={handleClose} id="modal-btn-abrir_projeto" endIcon={<LanguageIcon/>}>Abrir site </Button>
                    <Button onClick={handleClose} id="modal-btn-repositorio" endIcon={<GitHubIcon/>}>Abrir repositório </Button>
                </div>
            </div>

        </Box>
      </Modal>
        </div>
  );
}







// ===== Componente =====


export default function Projetos(props: Props) {
    const { title, srcImg, description, subtitle } = props;

    return(
        <>
            
            <section className="main">
            
                <section className="card-projetos">

                    <div className="projetos">
                        <article>
                            <h1 className="card-titulo">{title}</h1>
                            <p className="card-texto">{description}</p>
                        </article>
                    </div>

                    <div className='test'>
                            <img 
                                src={srcImg}
                                className="projetos-img"
                            />
                    </div>

                    <div className="projetos-btn">
                        <ScrollDialog title={title} description={description} subtitle={subtitle} srcImg={srcImg}/>
                        <BasicModal title={title} description={description} subtitle={subtitle} srcImg={srcImg}/>
                    </div>
                </section>
            </section>
        </>
    )
}

