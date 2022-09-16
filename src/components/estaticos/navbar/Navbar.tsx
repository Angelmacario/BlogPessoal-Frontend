import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'

import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokenReducer';
import { addToken } from '../../../store/tokens/action';

import { toast } from 'react-toastify';

function Navbar() {
    
    // quem vai disparar a ação, para enviar nosso token ao store
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let history = useNavigate();
    const dispatch = useDispatch();
    
    //function que irá deslogar o usuário através da remoção do token
     function goLogout(){
        dispatch(addToken(''));

        toast.success(' Usuário deslogado!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,// pausar após passar o mouse
            draggable: true,//mover a notificacao de local 
            progress: undefined,
            theme: "dark",
            });
          
          navigate('/login')
     }

    let navbarComponent;

    if(token != ""){ //se houver um token eu vou ser rederizado
        navbarComponent =  <AppBar position="static"> //navbar ta revebendo todo o componete
        <Toolbar variant="dense">
            <Box style={{ cursor: "pointer" }} >
                <Typography variant="h5" color="inherit">
                    BlogPessoal
                </Typography>
            </Box>

            <Box display="flex" justifyContent="start">
              <Link to="/home">
                <Box mx={1} style={{ cursor: "pointer" }}>
                    <Typography variant="h6" color="inherit">
                        home
                    </Typography>
                </Box>
                </Link>

                <Link to="/posts" className="text-decorator-none">
                <Box mx={1} style={{ cursor: "pointer" }}>
                    <Typography variant="h6" color="inherit">
                        postagens
                    </Typography>
                </Box>
                </Link>

                <Link to="/temas" className="text-decorator-none">
                <Box mx={1} style={{ cursor: "pointer" }}>
                    <Typography variant="h6" color="inherit">
                        temas
                    </Typography>
                </Box>
                </Link>

                <Link to="/formularioTema" className="text-decorator-none">
                <Box mx={1} style={{ cursor: "pointer" }}>
                    <Typography variant="h6" color="inherit">
                        cadastrar tema
                    </Typography>
                </Box> 
                </Link>

                    <Box mx={1} className='cursor' onClick={goLogout}>
                        <Typography variant="h6" color="inherit">
                            logout
                        </Typography>
                    </Box>
                
            </Box>

        </Toolbar>
    </AppBar>
    }

    return
        <>
           { navbarComponent} //será rederizado se houve um token
        </>
}

export default Navbar;

function setToken(arg0: string) {
    throw new Error('Function not implemented.');
}
