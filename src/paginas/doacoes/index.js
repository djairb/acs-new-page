import React, { useState, useEffect } from 'react';
import './doacoes.css';

// Componentes
import Navbar from '../../componentes/nav';
import Footer from '../../componentes/folter';

// Imagens locais
import bb from "../../img/parceiros/voce-tambem/bb.png";
import pixImg from "../../img/parceiros/voce-tambem/pix.png";

// Swiper e módulos
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, EffectFade } from 'swiper/modules';

// Importação dos estilos do Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

// Importação do QRCode
import { QRCodeSVG } from 'qrcode.react';

/* --- FUNÇÃO CORRIGIDA PARA GERAR PIX --- */
function gerarPixString(chave, nome, cidade, valor) {
  // 1. Limpar a chave PIX (remover pontuação do CNPJ)
  const chaveLimpa = chave.replace(/[^0-9]/g, '');
  
  // 2. Validar e formatar o valor
  const valorNumerico = parseFloat(valor);
  if (isNaN(valorNumerico) || valorNumerico <= 0) {
    throw new Error('Valor inválido');
  }
  
  const valorFormatado = valorNumerico.toFixed(2);
  
  // 3. Tratar nome e cidade (remover acentos, limitar tamanho)
  const nomeTratado = nome
    .substring(0, 25)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();
    
  const cidadeTratada = cidade
    .substring(0, 15)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();
  
  // 4. Construir o payload PIX seguindo o padrão EMV
  const payloadParts = [];
  
  // Payload Format Indicator
  payloadParts.push('000201');
  
  // Merchant Account Information (Campo 26)
  const guiPix = '0014br.gov.bcb.pix';
  const chaveField = `01${chaveLimpa.length.toString().padStart(2, '0')}${chaveLimpa}`;
  const merchantAccountInfo = `${guiPix}${chaveField}`;
  const merchantAccountInfoLength = merchantAccountInfo.length;
  
  payloadParts.push(`26${merchantAccountInfoLength.toString().padStart(2, '0')}${merchantAccountInfo}`);
  
  // Merchant Category Code
  payloadParts.push('52040000');
  
  // Transaction Currency (BRL = 986)
  payloadParts.push('5303986');
  
  // Transaction Amount
  payloadParts.push(`54${valorFormatado.length.toString().padStart(2, '0')}${valorFormatado}`);
  
  // Country Code
  payloadParts.push('5802BR');
  
  // Merchant Name
  payloadParts.push(`59${nomeTratado.length.toString().padStart(2, '0')}${nomeTratado}`);
  
  // Merchant City
  payloadParts.push(`60${cidadeTratada.length.toString().padStart(2, '0')}${cidadeTratada}`);
  
  // Additional Data Field Template
  payloadParts.push('62070503***');
  
  // CRC16 placeholder
  const payloadSemCRC = payloadParts.join('');
  
  // 5. Calcular CRC16-CCITT
  const calcularCRC16 = (str) => {
    let crc = 0xFFFF;
    let j, i;
    
    for (i = 0; i < str.length; i++) {
      crc ^= str.charCodeAt(i) << 8;
      for (j = 0; j < 8; j++) {
        crc = (crc & 0x8000) ? (crc << 1) ^ 0x1021 : crc << 1;
      }
    }
    
    return (crc & 0xFFFF).toString(16).toUpperCase().padStart(4, '0');
  };
  
  const crc = calcularCRC16(payloadSemCRC + '6304');
  
  // 6. Retornar payload completo
  return payloadSemCRC + '6304' + crc;
}

function Doacoes() {
  
  // Estados para o Gerador de Pix
  const [valor, setValor] = useState('');
  const [payloadPix, setPayloadPix] = useState('');
  const [gerandoPix, setGerandoPix] = useState(false);
  const [erroPix, setErroPix] = useState('');

  // Quando o valor muda, limpa o QR Code existente
  useEffect(() => {
    if (payloadPix) {
      setPayloadPix('');
    }
  }, [valor]);

  // Função chamada ao clicar no botão "Gerar QR Code"
  const handleGerarPix = (e) => {
    e.preventDefault();
    setErroPix('');
    
    // Validação básica
    const valorNumerico = parseFloat(valor);
    if (!valor || isNaN(valorNumerico) || valorNumerico < 1) {
      setErroPix('Por favor, insira um valor válido (mínimo R$ 1,00)');
      return;
    }
    
    setGerandoPix(true);
    
    try {
      // Gera o código PIX
      const codigo = gerarPixString(
        '07599362000190',  // Chave PIX (CNPJ sem pontuação)
        'CONEXAO SOCIAL',  // Nome do Beneficiário
        'LAGOA DE ITAENGA', // Cidade
        valorNumerico      // Valor digitado pelo usuário
      );
      
      // Validação do payload gerado
      if (!codigo || codigo.length < 50 || !codigo.startsWith('000201')) {
        throw new Error('Falha ao gerar código PIX');
      }
      
      setPayloadPix(codigo);
      
    } catch (error) {
      console.error('Erro ao gerar PIX:', error);
      setErroPix('Erro ao gerar código PIX. Por favor, tente novamente.');
      setPayloadPix('');
    } finally {
      setGerandoPix(false);
    }
  };

  // Função para preencher valores rápidos (apenas preenche o input)
  const preencherValorRapido = (valorTeste) => {
    setValor(valorTeste.toString());
    setErroPix('');
  };

  // Função para copiar o código PIX
  const copiarCodigoPix = () => {
    if (payloadPix) {
      navigator.clipboard.writeText(payloadPix)
        .then(() => {
          alert('Código PIX copiado para a área de transferência!');
        })
        .catch(err => {
          console.error('Erro ao copiar:', err);
        });
    }
  };

  // Imagens do Slider
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
            modules={[Navigation, Autoplay, Pagination, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            effect={'fade'}
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
            <h3 className="methods-title">Dados Bancários Fixos:</h3>
            
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

              {/* Card PIX Estático (Informativo) */}
              <div className="card-item card-pix">
                <div className="card-icon">
                  <img src={pixImg} alt="Logo Pix" />
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

          {/* --- SEÇÃO: GERADOR DINÂMICO DE PIX --- */}
          <div className="dynamic-pix-section">
            <h3 className="methods-title">Ou defina um valor específico agora:</h3>
            
            <div className="pix-generator-box">
              <form onSubmit={handleGerarPix} className="pix-form">
                <label htmlFor="valorPix">Qual valor você deseja doar?</label>
                <div className="input-wrapper">
                  <span className="currency-symbol">R$</span>
                  <input 
                    id="valorPix"
                    type="number" 
                    placeholder="0,00" 
                    step="0.01"
                    min="1"
                    value={valor}
                    onChange={(e) => {
                      setValor(e.target.value);
                      setErroPix('');
                    }}
                    disabled={gerandoPix}
                  />
                  <button 
                    type="submit" 
                    disabled={gerandoPix || !valor}
                    className={gerandoPix ? 'loading' : ''}
                  >
                    {gerandoPix ? 'Gerando...' : 'Gerar QR Code'}
                  </button>
                </div>
                
                {/* Botões de valor rápido - APENAS PREENCHEM O INPUT */}
                <div className="quick-values">
                  <p>Valores sugeridos:</p>
                  <div className="quick-buttons">
                    {[10, 25, 50, 100].map((quickVal) => (
                      <button
                        key={quickVal}
                        type="button"
                        onClick={() => preencherValorRapido(quickVal)}
                        className="quick-btn"
                      >
                        R$ {quickVal},00
                      </button>
                    ))}
                  </div>
                </div>
              </form>

              {erroPix && (
                <div className="error-message">
                  <p>⚠️ {erroPix}</p>
                </div>
              )}

              {/* Renderiza o QR Code somente se houver payload gerado */}
              {payloadPix && (
                <div className="pix-result fadeIn">
                  <h4>QR Code PIX para R$ {parseFloat(valor).toFixed(2).replace('.', ',')}</h4>
                  
                  <div className="qr-frame">
                    <QRCodeSVG 
                      value={payloadPix} 
                      size={220}
                      level="M"
                      includeMargin={true}
                    />
                  </div>
                  
                  <p className="pix-instruction">
                    1. Abra o app do seu banco<br/>
                    2. Escaneie o código acima<br/>
                    3. Confirme o pagamento
                  </p>
                  
                  <div className="copy-paste-box">
                    <input 
                      type="text" 
                      readOnly 
                      value={payloadPix} 
                      onClick={(e) => e.target.select()}
                    />
                    <button onClick={copiarCodigoPix}>
                      Copiar Código PIX
                    </button>
                  </div>
                  
                  <p className="pix-note">
                    <small>
                      <strong>Importante:</strong> Este QR Code é válido apenas para R$ {parseFloat(valor).toFixed(2).replace('.', ',')}.
                      Para outro valor, digite acima e gere um novo código.
                    </small>
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* --- FRASE FINAL --- */}
          <div className="final-quote-container">
            <h2 className="final-quote">
              "Sua doação tem o poder de <br/> <span className="underline-green">transformar histórias.</span>"
            </h2>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Doacoes;