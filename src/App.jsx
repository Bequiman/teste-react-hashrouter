import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

import Ancora from './Ancora'
import InterfaceContador from "./components/contador/InterfaceContador";
import ExibirNome from './components/exibir_nome/ExibirNome';
import AdicionarParagrafos from './components/adicionar_paragrafos/AdicionarParagrafos';
import ConcatenarNome from './components/concatenar_nome/ConcatenarNome';
import InterfaceCaixaTexto from "./components/caixa_texto/InterfaceCaixaTexto";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Ancora />} />
        <Route path="/exercicio1" element={<InterfaceContador />} />
        <Route path="/exercicio2" element={<ExibirNome />} />
        <Route path="/exercicio3" element={<InterfaceCaixaTexto />} />
        <Route path="/exercicio4" element={<ConcatenarNome />} />
        <Route path="/exercicio5" element={<AdicionarParagrafos />} />
      </Routes>
    </HashRouter>
  )
}

export default App


/*

HashRouter = usar quando for utilizar pages do github

BrowserRouter

*/