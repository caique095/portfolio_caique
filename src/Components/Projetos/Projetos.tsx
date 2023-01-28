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
import CloseIcon from '@mui/icons-material/Close';

//AOS
import Aos from "aos";
import "aos/dist/aos.css";

// JSON
import projetos from './projetos.json';



type Props = typeof projetos[0];


// ===== MODAL ===== 

  function BasicModal(props: Props) {
    const { title, srcImg, description, subtitle, url_repositorio, url_site } = props;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <div>
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
            <div className="btn-modal_close-container">
              <button onClick={handleClose}> <CloseIcon sx={{ fontSize: 30 }} id="btn-modal_close" className="btn-modal_close-mobile"/> </button>
            </div>
            <div className="modal-img">
                <aside id="modal-modal-description">
                    <img 
                      src={srcImg}
                      className="modal-img_photo"
                    />
                </aside>
            </div>
            <section className="modal-texto">
              <div className="btn-modal_container-desktop">
                <div className="btn-modal_close-container-desktop">
                  <h1 id="modal-modal-title">{title}</h1>
                  <button onClick={handleClose}> <CloseIcon sx={{ fontSize: 30 }} id="btn-modal_close" className="btn-modal_close-desktop"/> </button>
                </div>
            
                <article>
                {
                    description.split("<br>").map(desc =>
                      (<Typography id="modal-modal-text">{desc}</Typography>)
                    )
                  }
                </article>
              </div>

              <div className="modal-btn">
                <a href={url_site} id="modal-btn-abrir_projeto"> Abrir site <span className="icon"><LanguageIcon sx={{ fontSize: 23 }} /></span> </a>
                <a href={url_repositorio} id="modal-btn-repositorio"> Abrir repositório <span className="icon"><GitHubIcon sx={{ fontSize: 23 }} /></span> </a>
              </div>
            </section>

        </Box>
      </Modal>
        </div>
  );
}


// ===== Component =====


export default function Projetos(props: Props) {
    useEffect(() => {
      Aos.init({ duration: 1500 });
  }, []);
  
    const { title, srcImg, description, subtitle, url_repositorio, url_site } = props;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);

    const settings = {
      spaceBetween: 50,
      slidesPerview: 3,
      navigation: true,
    };

    return(
        <>
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
            <BasicModal 
              title={title} 
              description={description} 
              subtitle={subtitle} 
              srcImg={srcImg} 
              url_repositorio={url_repositorio}
              url_site={url_site}
            />
            </div>

          </section>


        </>
    )
}