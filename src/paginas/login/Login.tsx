import React, { useState, useEffect, ChangeEvent } from 'react'; //useState: ele é responsável por fazer o controle dos valores de um component
import { Grid, Typography, TextField, Button} from '@material-ui/core'; //aqui dentro da {} eu vou acrescentando minhas
import { Link, Navigate, useNavigate} from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import'./Login.css';
import { Box } from '@mui/material';

function Login(){

    let history = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    const [userLogin, setUserLogin] = useState<UserLogin>( // minha model
        {
                id: 0,
                usuario: '',
                senha: '',
                token: '',
        }
        ) // valores iniciais do state

        function updatedModel(e: ChangeEvent<HTMLInputElement>) {

            setUserLogin({ // to usando {} pq tem um objeto
                ...userLogin,
                [e.target.name]: e.target.value //campo e valor
            })
        }

            useEffect(()=>{
                if(token != ''){ //diferente
                    navigate.push('/home')
                }
            }, [token])

        async function onSubmit(e:ChangeEvent<HTMLInputElement>){ // vai olhar o formulário como todo
            e.preventDefault();
            try{
              await login(`/usuarios/logar`, userLogin, setToken)
               //será o responsável por fazer a gravação

                alert('Usuário logado com sucesso!');
            }catch{
                alert('Dados do usuário inconsistentes. Erro ao logar')
            }

        }

    return(
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Entrar</Typography>
                        <TextField valeu={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth/>
                        <TextField valeu={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth/>
                        <Box marginTop={2} textAlign='center'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        <Link to='cadastrousuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos'>Cadastre-se</Typography>
                        </Link>
                        </Box>
                             
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className= 'imagem'> 

            </Grid>
        </Grid>


    );
}

export default Login;