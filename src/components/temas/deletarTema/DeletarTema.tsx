import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

import {Box, Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';

import './DeletarTema.css';
import { buscaId, deleteId } from '../../../services/Services';
import Tema from '../../../models/Tema';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

import { toast } from 'react-toastify';


function DeletarTema() {

  let history = useNavigate();

  const { id } = useParams<{id: string}>();

  const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );

  const [tema, setTema] = useState<Tema>()

   useEffect(() => {
    if(token === "") {
      toast.error('Você precisa estar logado !', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      navigate("/login")
    }
  }, [token])

  useEffect(() =>{
      if(id !== undefined){
          findById(id)
      }
  }, [id])

  async function findById(id: string) {
      buscaId(`/Tema/${id}`, setTema, {
          headers: {
            'Authorization': token
          }
        })
      }

      async function sim() {
        navigate('/temas')
    
        try {
         await deleteId(`/temas/${id}`, {
            headers: {
              'Authorization': token
            }
          })
          toast.success('Tema deletado com sucesso!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    
        } catch (error) {
          toast.error('Erro ao deletar!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        }
      }
      
        function nao() {
          history('/Tema')
        }
        
 return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography gutterBottom>
                Deseja deletar o Tema:
              </Typography>
              <Typography>
                {tema?.descricao}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button onClick={sim} variant="contained" className="marginLeft btnSim" size='large' >
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button onClick={nao} variant="contained" size='large' className='btnNao'>
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarTema;