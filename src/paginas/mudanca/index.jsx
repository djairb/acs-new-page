

import React from 'react';
import './mudanca.css';

import Navbar from '../../componentes/nav';
import Footer from '../../componentes/folter';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function SejaMudanca() {

  const camisetas = [
    'https://somosconexaosocial.org/site_img/seja_mudanca/camisa01.jfif',
    'https://somosconexaosocial.org/site_img/seja_mudanca/camisa02.jfif',
    'https://somosconexaosocial.org/site_img/seja_mudanca/camisa03.jfif',
    'https://somosconexaosocial.org/site_img/seja_mudanca/camisa04.jfif'
  ];

  const copos = [
    'https://somosconexaosocial.org/site_img/seja_mudanca/copo01.PNG',
    'https://somosconexaosocial.org/site_img/seja_mudanca/copo02.PNG',
    'https://somosconexaosocial.org/site_img/seja_mudanca/copo03.PNG',
    'https://somosconexaosocial.org/site_img/seja_mudanca/copo04.PNG'
  ];

  return (
    <div className="page-wrapper seja-mudanca">
      <Navbar />

      <main>
        {/* BANNER PRINCIPAL */}
        <section className="banner-campanha">
          <picture>
            <source media="(max-width: 768px)" srcSet="https://somosconexaosocial.org/site_img/seja_mudanca/mudanca-banner-menor.jpg" />
            <img 
              src="https://somosconexaosocial.org/site_img/seja_mudanca/mudanca-banner.jpg" 
              alt="Campanha Seja a Mudança" 
            />
          </picture>
        </section>

        {/* TEXTO OBJETIVO */}
        <section className="campanha-texto">
          <h1>Seja a mudança que você quer ver no mundo</h1>
          <p>
            A transformação social começa com um gesto simples: agir. Inspirados por Gandhi, criamos um movimento que conecta pessoas dispostas a apoiar projetos sociais que geram impacto real nas comunidades.
          </p>
          <p>
            Cada contribuição fortalece iniciativas que promovem educação, inclusão e dignidade. Ao participar, você se torna parte ativa dessa transformação e inspira outras pessoas a fazerem o mesmo.
          </p>
        </section>

        {/* DESTAQUE PIX */}
        <section className="pix-destaque">
          <h2>Contribua via PIX</h2>
          <p className="pix-chave">administrativo@somosconexaosocial.org</p>
          <span>Sua contribuição apoia diretamente nossos projetos sociais</span>
        </section>

        {/* SLIDE CAMISETAS */}
        <section className="produtos-section">
          <h2>Camisetas da Campanha</h2>
          <p className="preco">R$ 50,00 por unidade</p>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 3000 }}
            loop
          >
            {camisetas.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`Camiseta ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* SLIDE COPOS */}
        <section className="produtos-section fundo-azul">
          <h2>Copos Térmicos</h2>
          <p className="preco">R$ 55,00 por unidade</p>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 3000 }}
            loop
          >
            {copos.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`Copo térmico ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* ECOBAG */}
        <section className="ecobag-section">
          <h2>Eco Bag</h2>
          <p className="preco">R$ 30,00</p>
          <img 
            src="https://somosconexaosocial.org/site_img/seja_mudanca/eco_bag.jpeg" 
            alt="Eco Bag da campanha" 
          />
        </section>

        {/* FRASE FINAL */}
        <section className="frase-final">
          <h2>Doe. Participe. Inspire.</h2>
          <p>A mudança começa em você.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default SejaMudanca;

