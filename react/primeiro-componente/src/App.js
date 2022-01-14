import './App.css';

import {BoaTarde, BoaNoite} from './components/Multiplos'
import Saudacao from './components/Saudacao';
import Pai from './components/PaiEFilho/Pai'
import Filho from './components/PaiEFilho/Filho';

function App() {
  return (
    <div>
      {/* COMPONENTES FUNCIONAIS */}
      {/* <BomDia nome="Guilherme" idade={10}/>
      <BoaTarde nome="Guilherme" idade={10}/>
      <BoaNoite nome="Guilherme" idade={10}/> */}

      {/* COMPONENTE CLASSE  */}
      <Saudacao tipo="Bom dia" nome="Pedro"/>
      <Pai nome="Paulo" sobrenome="Silva">
          {/* como passo os componentes filhos aqui? */}
          <Filho nome="Pedro"/>
          <Filho nome="Paulo"/>
          <Filho nome="Ana"/>
      </Pai>
    </div>
  );
}

export default App;
