import React from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import './App.css';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import {Provider} from 'react-redux';
import store from './store/store';

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
