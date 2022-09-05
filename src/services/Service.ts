import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://bloggeneration.herokuapp.com'
})

    export const cadastroUsuario  = async(url: any, dados: any, setDado: any) => { // /usuarios/logar
    const resposta = await api.post(url, dados)
    setDado(resposta.data) //concateno a url de cadastro, os dados, e quando a api retornar
    }

    export const login = async(url: any, dados: any, setDado: any) => { 
    const resposta = await api.post(url, dados)
    setDado(resposta.data.token)
    }

//aqui criamos o método