import { useEffect, useState } from 'react';
import './lp.css';
import headline from '../../img/headline_oficial.png';
import mockup from '../../img/mockup.png';
import garantia from '../../img/garantia.png'
import pag1 from '../../img/pag1.png';
import pag2 from '../../img/pag2.png';
import pag3 from '../../img/pag3.png';
import logo from '../../img/logo.png';
import whatsapp from '../../img/whatsapp.png';

function LP() {
  const [cidade, setCidade] = useState();
  const [mostra, setMostra] = useState(false);

  const data = [
    {
      image: 'https://orgasmomagnetico.com.br/wp-content/uploads/2021/09/a7.png',
      module: 'Módulo 4',
      title: 'O Perigo!',
      description: 'Aqui você vai entender o quanto o conteúdo desse treinamento é valioso... No momento que você percebe que isso é um perigo se cair em mãos erradas!',
    },
    {
      image: 'https://orgasmomagnetico.com.br/wp-content/uploads/2021/09/a1-7.png',
      module: 'Módulo 8',
      title: 'Abrindo as comportas do prazer',
      description: 'Logo após te explicar tudo que você precisa saber para se transformar em um Deus do Sexo, iremos abrir todas as comportas do prazer e aí meu amigo, hahaha... Você mal sabe o que está por vir...',
    },
    {
      image: 'https://orgasmomagnetico.com.br/wp-content/uploads/2021/09/a9.png',
      module: 'Módulo 10',
      title: 'Relaxamento Guiado',
      description: 'Um dos fundamentos para múltiplos orgasmos é o total relaxamento da mulher, e iremos falar a fundo sobre isso!',
    },
    {
      image: 'https://orgasmomagnetico.com.br/wp-content/uploads/2021/09/a4-1.png',
      module: 'Módulo 13',
      title: 'Orgasmo Sob Comando',
      description: 'Esse é o módulo que diferencia esse treinamento de tudo que você já viu por aí... Realmente fazer uma mulher gozar sob o seu comando, é só para os Deuses do Sexo! Bora!',
    },
    {
      image: 'https://orgasmomagnetico.com.br/wp-content/uploads/2021/09/a3.png',
      module: 'Módulo 14',
      title: 'Intensificadores da técnica',
      description: 'Por aqui iremos aprender todas as outras técnicas para complementar o sexo de uma forma completa... Pois querendo ou não, o sexo começa no bom dia!',
    },
    {
      image: 'https://orgasmomagnetico.com.br/wp-content/uploads/2021/09/a8.png',
      module: 'Módulo 19',
      title: 'Relaxamento Pós-Sexo',
      description: 'E logo após muita tremedeira hahaha, precisamos abaixar os ânimos e aproveitar o momento pós-sexo, por aqui vou te contar o que você deve fazer após o sexo!',
    },
  ];

  useEffect(() => {
    async function getData() {
      const response = await fetch(process.env.REACT_APP_IPINFO);
      const data = await response.json();
      setCidade(data.city);
    }
    setTimeout(() => {
      setMostra(true)
    }, 30000);
    getData();
  }, []);

  function exibeConteudo() {
    return (
      <>

        <div id="botaozada">
          <a href="https://pay.hotmart.com/E58118761U?checkoutMode=10&bid=1633136347046" className="button-main"><p className="botao-principal">QUERO O ORGASMO MAGNÉTICO AGORA!</p></a>
        </div>

        <div className="vagas">

          <div className="lastArea">
            ÚLTIMAS VAGAS COM DESCONTO
          </div>
          <div className="priceArea">
            <div className="priceContent">
              <p className="firstPrice">R$197,00</p>
              <p className="secondPrice">ou 12 de R$19,19</p>

            </div>
          </div>
          <div className="buttonArea">
            <a href="https://pay.hotmart.com/E58118761U?checkoutMode=10&bid=1633136347046" className="btnQuero">QUERO O ORGASMO MAGNÉTICO AGORA!</a>
          </div>

        </div>




        <div className="modulos">
          <p className="titulo">O Orgasmo Magnético conta com 19 módulos!
            Vamos conhecer um pouco sobre alguns...</p>

          {
            data.map((modulo) => (
              <div className="moduleCard">
                <div className="imageArea">
                  <img className="cardImage" src={modulo.image} alt="brain" />
                </div>
                <div className="titleArea">
                  <p className="moduleNumber">{modulo.module}</p>
                  <p className="moduleTitle">{modulo.title}</p>
                </div>
                <div className="moduleExemple">
                  {modulo.description}
                </div>
              </div>
            ))
          }


          <div id="imgmockup">
            <img src={mockup} alt="some text" id="mockup" />
          </div>


          <div id="garantia">
            <img src={garantia} alt="some text" id="garantiaimg" />
            <p className="titulo">Seu dinheiro de volta</p>
            <p className="textogarantiaa">Ainda não tem certeza se esse programa é para você? Não tem problema. Nós acreditamos tanto no programa que vamos deixar você experimentá-lo por 7 dias de garantia. Se dentro desse período você não ficar completamente satisfeito, basta nos enviar um e-mail e devolveremos 100% do seu investimento. Simples assim </p>
          </div>

          <div id="resultados">
            <p className="titulo">Alunos que já estão botando pra arrepiar!</p>
            <div className="video-vimeo">
              <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <iframe
                  src="https://player.vimeo.com/video/612855132?h=af1c56711b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
                  title="Comando psicol&amp;oacute;gico secreto para fazer ela gozar sob o seu comando!"
                />
              </div>

              <script src="https://player.vimeo.com/api/player.js"></script>
            </div>
          </div>

          <div id="faq">
            <div className="compra">
              <p className="titulo">O que acontece depois da compra?</p>
              <p className="titulo2">PAGAMENTO</p>
              <img src={pag1} alt="some text" id="pagamentosimg" />
              <p className="titulo3">Clique no botão QUERO O ORGASMO MAGNÉTICO AGORA! Você vai ser direcionado para uma página de pagamento 100% segura para finalizar a compra.</p>


              <p className="titulo2">DADOS DE ACESSO</p>
              <img src={pag2} alt="some text" id="pagamentosimg" />
              <p className="titulo3">Complete o pagamento e você vai ter o seu acesso liberado na área de membros do Orgasmo Magnético, além do passo a passo para tornar ainda mais fácil o seu aprendizado.</p>


              <p className="titulo2">MÃOS A OBRA</p>
              <img src={pag3} alt="some text" id="pagamentosimg" />
              <p className="titulo3">Siga nosso método e se torne um outro homem! Saia por aí fazendo mulheres gozarem SOB O SEU COMANDO!</p>
            </div>
            <p className="titulo">Perguntas Frequentes</p>
          </div>
          <a className="btnwpp" href="https://api.whatsapp.com/send?phone=5522988333272&text=Ol%C3%A1%2C%20estou%20na%20p%C3%A1gina%20do%20Orgasmo%20Magn%C3%A9tico%20e%20tenho%20algumas%20d%C3%BAvidas!">
            <img src={whatsapp} alt="whatsapp" className="whatsappImage" />
            <p className="wpp">PRECISO DE AJUDA...</p>
          </a>
        </div>
      </>
    );
  }
  return (
    <div className="corpo">
      <div className="regiao">
        <span id="region" style={{ color: '#fff', fontFamily: 'Poppins', fontWeight: 600 }}>
          Você e poucos homens próximos de {cidade} foram selecionados para assistir esse vídeo secreto!
        </span>
      </div>

      <div className="corpo">
        <div id="imgheadline">
          <img src={headline} alt="some text" id="headline" />
        </div>
      </div>

      <div className="video-vimeo">
        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
          <iframe
            src="https://player.vimeo.com/video/612855132?h=af1c56711b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
            title="Comando psicol&amp;oacute;gico secreto para fazer ela gozar sob o seu comando!"
          />
        </div>


        <p id="som"> POR FAVOR, VERIFIQUE SE O SOM ESTÁ LIGADO! </p>
      </div>
      {
        mostra
        && exibeConteudo()
      }

      <div className="fb-p">
        <p className="fb"> Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais.​</p>

        <p className="fb"><a href="">Termos de uso</a> | <a href="">Políticas de Privacidade</a></p>

      </div>
      <div className="rodape">

        <div className="rodapeesquerda">
          <p id="pirataria">PIRATARIA É <span style={{ color: '#000', fontweight: '600' }}>CRIME</span></p>

          <img src={logo} alt="some text" id="logo" />

          <p id="textonb">A venda do Orgasmo Magnético só pode ser realizada através deste site, registrado em nome de NB Makers. Qualquer outro site onde você encontre este programa é uma FALSIFICAÇÃO e vai contra as leis. Evite falsificações e recuse conteúdos ilegais ou pirateados. NÃO adquira programas parecidos e que não são baseados em anos de estudo da psicologia comportamental. Não nos responsabilizamos por compras realizadas em outros sites.</p>

        </div>


        <div className="rodapeedireita">
          <p id="textonb">Copyright 2021 – Orgasmo Magnético<br /> Todos os direitos reservados.</p>

        </div>

      </div>



    </div>
  );

}

export default LP;
