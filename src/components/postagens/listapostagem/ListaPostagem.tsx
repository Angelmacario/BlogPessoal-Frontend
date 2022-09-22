import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './ListaPostagem.css';
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Postagem from '../../../models/Postagem';
import { TenMpSharp } from '@mui/icons-material';
import { busca,post } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokenReducer';

import CardPostagem from "../../postagens/cardPostagem/CardPostagem";

import { toast } from 'react-toastify';

function ListaPostagem() {
  const [postagem, setPostagem] = useState<Postagem[]>([]);

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
);

let navigate = useNavigate();

useEffect(() => {
  if (token === "") {
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

    navigate("/login");
  }
}, [token]);


  async function getPost(){
    await busca("/postagens", setPostagem, {
      headers: {
        'Authorization': token
      }
    })
  }


  useEffect(()=>{
    getPost()
  }, [postagem.length])


  return (
    <>
    {postagem.map((posts) => (
        <CardPostagem objetoPost={posts} />
      ))}
    </>
  );
}

export default ListaPostagem;