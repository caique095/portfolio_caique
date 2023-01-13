// React
import * as React from 'react';
import { useEffect } from 'react';

// CSS
import './Projetos.css';

//MUI
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

//AOS
import Aos from "aos";
import "aos/dist/aos.css";

// JSON
import projetos from './projetos.json';



type Props = typeof projetos[0];

// ===== MODAL ===== 

  function BasicModal(props: Props) {
    const { title, srcImg, description, subtitle } = props;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


  return (
    <div>
      {/* <Button onClick={handleOpen} endIcon={<ArrowForwardIcon/>} id="projetos-btn-link">Saiba mais</Button> */}
      <button onClick={handleOpen} className="learn-more">
        <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
        </span>
        <span className="button-text">Saiba mais</span>
      </button>
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
                <Typography id="modal-modal-text">
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


// ===== Component =====


export default function Projetos(props: Props) {
    useEffect(() => {
      Aos.init({ duration: 1100 });
  }, []);
    const { title, srcImg, description, subtitle } = props;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);

    return(
          <section className="card" id="Projetos" data-aos="fade-up">
            <article className="card-campo_texto">
              <h1 className="card-titulo">{title}</h1>
              <p className="card-texto">{subtitle}</p>
            </article>
            
            <aside>
                <img
                  src={srcImg}
                  className="projetos-photo"
                />
              
              </aside>
          
            <div>
            <BasicModal title={title} description={description} subtitle={subtitle} srcImg={srcImg}/>
            </div>
          </section>
    )
}