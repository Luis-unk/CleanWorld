import './App.css';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { Cadastro } from './pages/cadastro';
import { AtualizarUsuario } from './pages/atualizarUsuario';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/cadastro" element={<Cadastro/> }/>
        <Route path='/atualizarUsuario' element={<AtualizarUsuario/>}/>
      </Routes>
    </Router>

  );
}

export default App;
