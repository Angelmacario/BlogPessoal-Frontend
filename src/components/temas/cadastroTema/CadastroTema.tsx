import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import Tema from '../../../models/Tema';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { buscaId, post, put } from '../../../services/Service';
 


function CadastroTema() {

    let history = useNavigate();
    const { id } = useParams<{id: string}>(); //serve para capturar parametros enviados por uma url 
    const [token, setToken] = useLocalStorage('token');
    const [tema, setTema] = useState<Tema>({ //vai alterar os temas
        id: 0,
        descricao: ''
    })

    useEffect(() => { // ele cuida do ciclo de vida 
        if (token == "") {
            alert("Você precisa estar logado")
            history("/login")
    
        }
    }, [token])

    useEffect(() =>{ //monitorar o id que está no useparam
        if(id !== undefined){ //se for vdd vai acionar o fibdById
            findById(id)
        }
    }, [id])

    async function findById(id: string) { //responsável por fazer a conecção com o id cadastrado
        buscaId(`/Tema/${id}`, setTema, {
            headers: {
              'Authorization': token
            }
          })
        }

        function updatedTema(e: ChangeEvent<HTMLInputElement>) { //vai capturar os valores colocados no formulário

            setTema({
                ...tema,
                [e.target.name]: e.target.value,
            })
    
        }
        
        async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()
            console.log("tema " + JSON.stringify(tema))
    
            if (id !== undefined) {
                console.log(tema)
                put(`/Tema`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })
                alert('Tema atualizado com sucesso');
            } else {
                post(`/Tema`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })
                alert('Tema cadastrado com sucesso');
            }
            back()
    
        }
    
        function back() {
            history('/Tema')
        }
  
    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro tema</Typography>
                <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema;
function useNavigation() {
    throw new Error('Function not implemented.');
}