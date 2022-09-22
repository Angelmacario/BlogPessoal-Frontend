import Tema from './Tema';
import User from "./User";

interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    data: string;
    tema?: Tema| null; // se for um objeto tema, se não for vai ser null
    usuario?: User | null;
}

export default Postagem;

// quem define os objetos será as models

//