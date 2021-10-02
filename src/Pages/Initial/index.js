import { useEffect, useState } from 'react';
import './App.css';

import Mouth from '../../img/icone.png'

function Initial() {
  const [brasil, setBrasil] = useState(false);

  function redirecionar() {
    if (brasil) {
      window.location.href = 'https://www.google.com';
    } else {
      window.location.href = '';
    }
  }

  useEffect(() => {
    async function getData() {
      const response = await fetch(process.env.REACT_APP_IPINFO);
      const data = await response.json();
      console.log(process.env.REACT_APP_IPINFO)
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

export default Initial;
