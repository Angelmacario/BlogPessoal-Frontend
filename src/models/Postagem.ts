import Tema from './Tema'

interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    tema?: Tema| null // se for um objeto tema, se não for vai ser null
}

export default Postagem;

// quem define os objetos será as models

//