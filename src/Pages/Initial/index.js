import { useEffect, useState } from 'react';
import './App.css';

import Mouth from '../../img/icone.png'

<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '900723827493782');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=900723827493782&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->


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
      const response = await fetch('https://ipinfo.io/?token=9c8a933f1acc15');
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
