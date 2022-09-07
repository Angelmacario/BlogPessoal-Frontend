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

    export const busca = async(url: any, setDado: any, header: any) => { //
        const resposta = await api.get(url, header) //get para obter o que já tem
        setDado(resposta.data)
    }

    export const buscaId = async(url: any, setDado: any, header: any) => { //
        const resposta = await api.get(url, header) 
        setDado(resposta.data)
    }

    export const post = async(url: any, dados: any, setDado: any, header: any) => { //
        const resposta = await api.post(url, dados, header)  // o post é o cadastro dessas informações na minha api
        setDado(resposta.data)
    }

    export const put = async(url: any, dados: any, setDado: any, header: any) => { //
        const resposta = await api.put(url, dados, header) //get para obter o que já tem
        setDado(resposta.data)
    }

    export const deleteId = async(url: any, header: any) => { //
        await api.delete(url, header) //get para obter o que já tem
    }

//aqui criamos o método

// para que ser a service?: é quem está ajudandando a fazer conecção com o back, as apis vão fazer isso

//delete: não vamos enviar informação nenhuma, ela vai falar apaguei