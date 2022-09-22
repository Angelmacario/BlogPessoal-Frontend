import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import {Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"

import './DeletarPostagem.css';
import Postagem from '../../../models/Postagem';
import { buscaId, deleteId } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokenReducer';

import { toast } from 'react-toastify';

import './DeletarPost.css';
import { Box } from '@mui/material';

function DeletarPostagem() {

  let navigate = useNavigate();
  const { id } = useParams<{id: string}>();

   const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );

  const [post, setPosts] = useState<Postagem>()

  useEffect(() => {
      if (token == "") {
           toast.error('Você precisa estar logado !', {
        position: "top-center",
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
      buscaId(`/Postagem/${id}`, setPosts, {
          headers: {
            'Authorization': token
          }
        })
      }

      function sim() {
        navigate('/Postagem') 
          deleteId(`/Postagem/${id}`, {
            headers: {
              'Authorization': token
            }
          });

          toast.success('🦄 Postagem deletada com sucesso!', {
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
      
        function nao() {
          navigate('/Postagem')
        }
return (
  <>
    <Box m={2}>
      <Card variant="outlined" >
        <CardContent>
          <Box justifyContent="center">
            <Typography color="textSecondary" gutterBottom>
              Deseja deletar a Postagem:
            </Typography>
            <Typography color="textSecondary" >
            {post?.titulo}
            </Typography>
          </Box>

        </CardContent>
        <CardActions>
          <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
            <Box mx={2}>
            <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
              Sim
            </Button>
            </Box>
            <Box>
            <Button  onClick={nao} variant="contained" size='large' color="secondary">
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
export default DeletarPostagem;