import {createStore} from 'redux';
import { tokenReducer } from './tokens/tokenReducer';

const store = createStore(tokenReducer); //estou passando como parametro

export default store;