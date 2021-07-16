import React, { useState } from 'react';
import ComponenteFilho from './components/ComponenteFilho';
import './App.css';

function App() {
    const [estadoPai, setEstadoPai] = useState('Não clicou');
    const [estadoFilho, setEstadoFilho] = useState('Não clicou');

    const handleClick = () => {
      setEstadoFilho('clicou')
    }

    return (
      <div className="App">
        <h1>botão localizado no componente filho {estadoPai}</h1>
        <button onClick={handleClick}>Clique aqui para alterar o componente pai</button>
        <ComponenteFilho 
        setEstadoPai={setEstadoPai}
        estadoFilho={estadoFilho}
        />
      </div>
    );
}

export default App;
