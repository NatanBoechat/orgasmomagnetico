import { useEffect, useState } from 'react';
import './App.css';

import Mouth from './img/icone.png'

function App() {
  const [brasil, setBrasil] = useState(false);

  function redirecionar() {
    if (brasil) {
      window.location.href = 'https://orgasmomagnetico.com.br/feliz/';
    } else {
      window.location.href = 'https://orgasmomagnetico.com.br/feliz/';
    }
  }

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://ipinfo.io/?token=9c8a933f1acc15');
      const data = await response.json();
      if (data.country === 'BR') {
        setBrasil(true);
      }
    }
    getData();
  }, []);

  return (
    <div className="mainContent">
      <img src={ Mouth } alt="Mouth Icon" className="mouth"/>
      <h1 className="headline">
        Você está prestes a viver uma experiência sem limites
      </h1>

      <button className="btnEmbarcar" onClick={ redirecionar }>
        Embarcar
      </button>
    </div>
  );
}

export default App;
