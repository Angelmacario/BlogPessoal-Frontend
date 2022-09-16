import {Provider} from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import store from './store/store';


import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroPostagem from './components/postagens/cadastropostagem/CadastroPostagem';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';

import Login from './paginas/login/Login';
import Home from './paginas/home/Home';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';

import 'react-toastify/dist/ReactToastify.css';

import './App.css';



function App() {
  return (
  <>
  <Provider store={store}>
   <Navbar />
      <Home />
        <Footer />
        <div style={{minHeight: '100vh'}}>
            
            <Route exact path='/'>
              <Login />
            </Route>
           
            <Route path='/login'>
               <Login/>
            </Route>

    <Route path='/home'>
      <Home />
    </Route>

    <Route path='/cadastrousuario'>
      <CadastroUsuario />
    </Route>

    <Route path='/temas'>
      <ListaTema />
    </Route>

    <Route path='/posts'>
      <ListaPostagem />
    </Route>

          <Route path="/formularioPostagem"> element=<{CadastroPost />} />
          <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
          <Route path="/formularioTema" element={<CadastroTema />} />
          <Route path="/formularioTema/:id" element={<CadastroTema />} />
          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
          <Route path="/deletarTema/:id" element={<DeletarTema />} />
  </div>
    </Provider>
  </>
  );
}

export default App;
