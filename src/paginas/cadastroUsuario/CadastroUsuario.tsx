import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/material';

import { Link, useNavigate } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from "react";


import './CadastroUsuario.css';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';


import { toast } from 'react-toastify';

function CadastroUsuario() {

    let navigate = useNavigate();

    const [confirmarSenha,setConfirmarSenha] = useState<String>("")
    
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    const [userResult, setUserResult] = useState<User>(
    
        {

            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    useEffect(() => { // será acionado após envio dos dados
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value) // captar o valor do confirmar senha, para armazemar o valor
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
        ...user,
        [e.target.name]: e.target.value
        })
        }

     async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault() //ele previne o comportamento, e diz se o ovalor dasenha está sendo correspondente ou não

         if(confirmarSenha == user.senha){
            toast.error('Dados inválidos!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });

        }else if (confirmarSenha === user.senha) {
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            toast.success(' Parabéns! Vou foi cadastrado.', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
        
        } else {
                toast.error('Dados inconsistentes. Favor verificar as informações de cadastro! ', {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,// pausar após passar o mouse
                  draggable: true,//mover a notificacao de local 
                  progress: undefined,
                  theme: "dark",
                  });
              }
        
          }
        

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit ={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLFormElement>) => updatedModel(e)} id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLFormElement>) => updatedModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLFormElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLFormElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                                 <Button type='submit' variant='contained' color='primary'>
                                    Cadastrar
                                </Button>
                        </Box>
                    </form>
                </Box>

            </Grid>

        </Grid>
    );
}

export default CadastroUsuario;