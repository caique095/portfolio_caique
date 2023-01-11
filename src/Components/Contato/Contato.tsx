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
import Loader from '../../Components/Loader/Loader';


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
        setIsLoading(false);

        console.log("EMAIL ENVIADO", response.status, response.text)
        setName('')
        setEmail('')
        setMessage('')
    }, (erro) => {
        console.log("ERRO: ", erro)
        setIsLoading(false);
    })
    }


  return (

       <form onSubmit={enviarEmail}>
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

                   <Button type="submit" id="contato-btn" variant="contained" endIcon={<SendIcon />}>
                       Enviar mensagem

                       {isLoading && (
                            <Loader />
                       )}
                   </Button>
           </article>
       </form>


  );
}