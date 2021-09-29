import './lp.css';
import headline from '../../img/headline_oficial.png';
import mockup from '../../img/mockup.png';
import garantia from '../../img/garantia.png'
import pag1 from '../../img/pag1.png';
import pag2 from '../../img/pag2.png';
import pag3 from '../../img/pag3.png';
import logo from '../../img/logo.png';

function LP() {
  return (
    <div className="corpo">
      <div className="regiao">
        <span id="region" style={{ color: '#fff', fontFamily: 'Poppins', fontWeight: 600 }}>
          Você e poucos homens próximos de <span id="address" style={{ color: 'white' }}></span> foram selecionados para assistir esse vídeo secreto!
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
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
            title="Comando psicol&amp;oacute;gico secreto para fazer ela gozar sob o seu comando!"
          />
        </div>


        <p id="som"> POR FAVOR, VERIFIQUE SE O SOM ESTÁ LIGADO! </p>
      </div>


      {/* <!-- OCULTO --> */}
      <div id="botaozada">
        <button className="button-main"><p className="botao-principal">QUERO O ORGASMO MAGNÉTICO AGORA!</p></button>
      </div>

      <div className="vagas">
        <p> ÚLTIMAS VAGAS COM DESCONTO</p>
        <p id="preco"> R$197,00 </p>
        <p id="preco2"> ou 12 de R$19,19</p>
        <button id="btn2"><p className="pbtn2">QUERO O ORGASMO MAGNÉTICO AGORA!</p></button>
      </div>




      <div className="modulos">
        <p className="titulo">O Orgasmo Magnético conta com 19 módulos!
          Vamos conhecer um pouco sobre alguns...</p>

        <div className="mod">
          <p className="titulomodulo">Módulo 4 O Perigo!</p>
          <p className="textomodulo">
            Aqui você vai entender o quanto o conteúdo desse treinamento é valioso... No momento que você percebe que isso é um perigo se cair em mãos erradas!
          </p>
        </div>

        <div className="mod">
          <p className="titulomodulo">Módulo 4 O Perigo!</p>
          <p className="textomodulo">
            Aqui você vai entender o quanto o conteúdo desse treinamento é valioso... No momento que você percebe que isso é um perigo se cair em mãos erradas!
          </p>
        </div>

        <div className="mod">
          <p className="titulomodulo">Módulo 4 O Perigo!</p>
          <p className="textomodulo">
            Aqui você vai entender o quanto o conteúdo desse treinamento é valioso... No momento que você percebe que isso é um perigo se cair em mãos erradas!
          </p>
        </div>

        <div className="mod">
          <p className="titulomodulo">Módulo 4 O Perigo!</p>
          <p className="textomodulo">
            Aqui você vai entender o quanto o conteúdo desse treinamento é valioso... No momento que você percebe que isso é um perigo se cair em mãos erradas!
          </p>
        </div>

        <div className="mod">
          <p className="titulomodulo">Módulo 4 O Perigo!</p>
          <p className="textomodulo">
            Aqui você vai entender o quanto o conteúdo desse treinamento é valioso... No momento que você percebe que isso é um perigo se cair em mãos erradas!
          </p>
        </div>

        <div className="mod">
          <p className="titulomodulo">Módulo 4 O Perigo!</p>
          <p className="textomodulo">
            Aqui você vai entender o quanto o conteúdo desse treinamento é valioso... No momento que você percebe que isso é um perigo se cair em mãos erradas!
          </p>
        </div>


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
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
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
        <button className="btnwpp"><p className="wpp">PRECISO DE AJUDA...</p></button>
      </div>
      <div className="fb-p">
        <p className="fb"> Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais.​</p>

        <p className="fb"><a href="">Termos de uso</a> | <a href="">Políticas de Privacidade</a></p>

      </div>
      <div className="rodape">

        <div className="rodapeesquerda">
          <p id="pirataria">PIRATARIA É <span style={{ color: '#000', fontweight: '600' }}>CRIME</span></p>

          <img src={ logo } alt="some text" id="logo" />

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
