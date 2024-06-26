import './App.css';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { Cadastro } from './pages/cadastro';
import { AtualizarUsuario } from './pages/atualizarUsuario';
import { DeleteUsuario } from './pages/deleteUsuario';
import { Login } from './pages/login'

function App() {
  return (

    <Router>
      <Routes>
        <Route path='/cadastro' element={<Cadastro/> }/>
        <Route path='/atualizarUsuario' element={<AtualizarUsuario/>}/>
        <Route path='/deleteUsuario' element={<DeleteUsuario/>}/>
        <Route path='/login' element={<Login/>}> </Route>
      </Routes>
    </Router>

  );
}

export default App;
