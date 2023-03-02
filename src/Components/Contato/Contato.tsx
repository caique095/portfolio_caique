// React
import * as React from 'react';
import { useState } from 'react';

// CSS
import './Contato.css';

// MUI
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

// MUI Icon
import SendIcon from '@mui/icons-material/Send';


// Email JS
import emailjs from '@emailjs/browser';

// Components
import Loader from './Loader/Loader';


export default function Contato() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    function enviarEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);


    if (name === '' || email === '' || message === '') {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const templateParams = {
        from_name: name,
        message: message,
        email: email
    }


    emailjs.send("service_ouraegu", "template_4eargai", templateParams, "lA8K_DIO2o26FfIhH")
    .then((response) => {
    setIsLoading(true);
        console.log("EMAIL ENVIADO", response.status, response.text)
        setName('')
        setEmail('')
        setMessage('')
    setIsLoading(false);
    }, (erro) => {
        console.log("ERRO: ", erro)
    })
    }


  return (

       <form onSubmit={enviarEmail} id="Contato">
           <article className="contato-campo-texto">
               <TextField className="contato-campo-texto_nome" id="outlined-basic" label="Nome" variant="outlined" 
                   onChange={(e) => setName(e.target.value)}
                   value={name}
               />
               <TextField className="contato-campo-texto_email" id="outlined-basic" label="Email" variant="outlined" 
                   onChange={(e) => setEmail(e.target.value)}
                   value={email}
               />
               <TextField
               className="contato-campo-texto_mensagem"
                   id="outlined-multiline-static"
                   label="Mensagem..."
                   multiline
                   rows={4}
                   onChange={(e) => setMessage(e.target.value)}
                   value={message}
                   />


                   <button id="btn-contato">
                        <div className="svg-wrapper-1">
                            <div className="svg-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                            </svg>
                            </div>
                        </div>
                        <span>Enviar mensagem</span>

                        {isLoading && (
                            <Loader />
                       )}

                    </button>


           </article>
       </form>


  );
}