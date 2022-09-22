import {Action } from './action';

export interface TokenState {
    tokens: string
}

const initialState = { // as {} são para definir o valor que vou dar para as variáveis
    tokens: "" //to definindo um valor inicial vazio
}

export const tokenReducer = (state: TokenState = initialState, action: Action) =>{
    switch (action.type){
        case "ADD_TOKEN": {
            return {tokens: action.payload} //payload: é como se fosse o token em si
        }

        default:
            return state
    }
} // métod Reducer - ele vai receber uma fução

//state: TokenState: minha variável é do tipo da minha model e eu atribui um valor inicial :