import React from 'react';
import './doacoes.css';

// Componentes
import Navbar from '../../componentes/nav';
import Footer from '../../componentes/folter';

// Imagens locais
import bb from "../../img/parceiros/voce-tambem/bb.png";
import pix from "../../img/parceiros/voce-tambem/pix.png";

// Swiper e módulos
import { Swiper, SwiperSlide } from 'swiper/react';
// ADICIONEI O 'Navigation' AQUI NA IMPORTAÇÃO
import { Navigation, Autoplay, Pagination, EffectFade } from 'swiper/modules';

// Importação dos estilos do Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation'; // IMPORTANTE: CSS DA NAVEGAÇÃO

function Doacoes() {

  const slideImages = [
    "https://somosconexaosocial.org/site_img/doacao/01.jpg",
    "https://somosconexaosocial.org/site_img/doacao/02.jpg",
    "https://somosconexaosocial.org/site_img/doacao/03.jpg",
    "https://somosconexaosocial.org/site_img/doacao/04.jpg",
    "https://somosconexaosocial.org/site_img/doacao/05.jpg"
  ];

  return (
    <div className="page-wrapper">
      <Navbar />

      <main className="donation-main">
        
        {/* Seção do Slider (Hero Section) */}
        <section className="donation-hero">
          <Swiper
            // ADICIONEI O 'Navigation' AQUI NA LISTA DE MÓDULOS
            modules={[Navigation, Autoplay, Pagination, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            effect={'fade'}
            // ATIVEI A NAVEGAÇÃO (SETINHAS) AQUI
            navigation={true} 
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop={true}
            className="mySwiper"
          >
            {slideImages.map((imgUrl, index) => (
              <SwiperSlide key={index}>
                <div 
                  className="slide-bg" 
                  style={{ backgroundImage: `url(${imgUrl})` }} 
                  aria-label={`Imagem da doação ${index + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Seção de Conteúdo e Informações */}
        <section className="donation-content-container">
          
          <div className="donation-text">
            <h1 className="main-title">
              Junte-se à <span className="highlight-text">Transformação Social</span>
            </h1>
            <p className="description">
              Sua contribuição é a semente que cultiva educação, inclusão e sustentabilidade. 
              Ao apoiar a Conexão Social, você impacta diretamente o desenvolvimento de comunidades 
              que necessitam de oportunidades.
            </p>
            <p className="description-secondary">
              <strong>Importante:</strong> Você pode destinar até <span className="highlight-red">6% do seu Imposto de Renda </span> 
              diretamente para nossas ações sem gastar nada a mais por isso. Faça parte dessa mudança agora!
            </p>
          </div>

          <div className="donation-methods">
            <h3 className="methods-title">Escolha como contribuir:</h3>
            
            <div className="cards-grid">
              
              {/* Card Banco do Brasil */}
              <div className="card-item card-bb">
                <div className="card-icon">
                  <img src={bb} alt="Logo Banco do Brasil" />
                </div>
                <div className="card-info">
                  <h4>Transferência Bancária</h4>
                  <p><strong>Banco do Brasil</strong></p>
                  <p>Agência: <strong>2239-X</strong></p>
                  <p>Conta: <strong>10432-9</strong></p>
                </div>
              </div>

              {/* Card PIX */}
              <div className="card-item card-pix">
                <div className="card-icon">
                  <img src={pix} alt="Logo Pix" />
                </div>
                <div className="card-info">
                  <h4>Doação via PIX</h4>
                  <p>Chave CNPJ:</p>
                  <p className="pix-key">07.599.362/0001-90</p>
                  <span className="pix-badge">Rápido e Seguro</span>
                </div>
              </div>

            </div>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Doacoes;