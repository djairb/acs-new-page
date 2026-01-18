import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './mudanca.css';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

// Componentes
import Navbar from '../../componentes/nav';
import Footer from '../../componentes/folter';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

// QRCode
import { QRCodeSVG } from 'qrcode.react';
import { API_BASE_URL_DOACOES } from '../../infra/apiConfig';

/* --- FUNÇÃO PARA GERAR PIX (MESMA DA PÁGINA ANTERIOR) --- */
function gerarPixString(chave, nome, cidade, valor) {
  const chavePix = chave.trim();
  
  const valorNumerico = parseFloat(valor);
  if (isNaN(valorNumerico) || valorNumerico <= 0) {
    throw new Error('Valor inválido');
  }

  const valorFormatado = valorNumerico.toFixed(2);

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

  const payloadParts = [];

  payloadParts.push('000201');
  const guiPix = '0014br.gov.bcb.pix';
  const chaveField = `01${chavePix.length.toString().padStart(2, '0')}${chavePix}`;
  const merchantAccountInfo = `${guiPix}${chaveField}`;

  payloadParts.push(
    `26${merchantAccountInfo.length.toString().padStart(2, '0')}${merchantAccountInfo}`
  );

  payloadParts.push('52040000');
  payloadParts.push('5303986');
  payloadParts.push(`54${valorFormatado.length.toString().padStart(2, '0')}${valorFormatado}`);
  payloadParts.push('5802BR');
  payloadParts.push(`59${nomeTratado.length.toString().padStart(2, '0')}${nomeTratado}`);
  payloadParts.push(`60${cidadeTratada.length.toString().padStart(2, '0')}${cidadeTratada}`);
  payloadParts.push('62070503***');

  const payloadSemCRC = payloadParts.join('');

  const calcularCRC16 = (str) => {
    let crc = 0xFFFF;
    for (let i = 0; i < str.length; i++) {
      crc ^= str.charCodeAt(i) << 8;
      for (let j = 0; j < 8; j++) {
        crc = (crc & 0x8000) ? (crc << 1) ^ 0x1021 : crc << 1;
      }
    }
    return (crc & 0xFFFF).toString(16).toUpperCase().padStart(4, '0');
  };

  const crc = calcularCRC16(payloadSemCRC + '6304');

  return payloadSemCRC + '6304' + crc;
}

function SejaMudanca() {
  // Estados para o Gerador de Pix
  const [valor, setValor] = useState('');
  const [payloadPix, setPayloadPix] = useState('');
  const [gerandoPix, setGerandoPix] = useState(false);
  const [erroPix, setErroPix] = useState('');
  const [copiado, setCopiado] = useState(false);
  
  // Estados para brindes e formulário
  const [brindeSelecionado, setBrindeSelecionado] = useState(null);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [doacaoConcluida, setDoacaoConcluida] = useState(false);

  // Formulário com react-hook-form
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  // Imagens da campanha
  const imagensCampanha = {
    logo: "https://somosconexaosocial.org/site_img/seja_mudanca/logo-campanha.png",
    banner: "https://somosconexaosocial.org/site_img/seja_mudanca/mudanca-banner.jpg",
    
    camisas: [
      "https://somosconexaosocial.org/site_img/seja_mudanca/camisa01.jfif",
      "https://somosconexaosocial.org/site_img/seja_mudanca/camisa02.jfif",
      "https://somosconexaosocial.org/site_img/seja_mudanca/camisa03.jfif",
      "https://somosconexaosocial.org/site_img/seja_mudanca/camisa04.jfif"
    ],
    
    copos: [
      "https://somosconexaosocial.org/site_img/seja_mudanca/copo01.jpg",
      "https://somosconexaosocial.org/site_img/seja_mudanca/copo02.jpg",
      "https://somosconexaosocial.org/site_img/seja_mudanca/copo03.jpg"
    ],
    
    ecobag: [
      "https://somosconexaosocial.org/site_img/seja_mudanca/ecobag.jpg"
    ]
  };

  // Opções de brindes
  const opcoesBrindes = [
    {
      id: 1,
      nome: "Ecobag",
      valorMinimo: 30.00,
      descricao: "Sacola ecológica reutilizável",
      imagens: imagensCampanha.ecobag,
      cor: "#3460aa"
    },
    {
      id: 2,
      nome: "Copo Térmico",
      valorMinimo: 55.00,
      descricao: "Copo térmico personalizado",
      imagens: imagensCampanha.copos,
      cor: "#feb204"
    },
    {
      id: 3,
      nome: "Camisa",
      valorMinimo: 50.00,
      descricao: "Camisa da campanha 'Seja a Mudança'",
      imagens: imagensCampanha.camisas,
      cor: "#28a745"
    }
  ];

  // Função para gerar PIX
  const handleGerarPix = (e) => {
    e?.preventDefault();
    setErroPix('');
    
    // Validação
    const valorNumerico = parseFloat(valor);
    if (!valor || isNaN(valorNumerico) || valorNumerico < 1) {
      setErroPix('Por favor, insira um valor válido (mínimo R$ 1,00)');
      return;
    }
    
    setGerandoPix(true);
    
    try {
      // Gera o código PIX
      const codigo = gerarPixString(
        'administrativo@somosconexaosocial.org',
        'CONEXAO SOCIAL',
        'LAGOA DE ITAENGA',
        valorNumerico
      );
      
      if (!codigo || codigo.length < 50 || !codigo.startsWith('000201')) {
        throw new Error('Falha ao gerar código PIX');
      }
      
      setPayloadPix(codigo);
      
      // Mostra opções de brinde se o valor for suficiente
      if (valorNumerico >= 30) {
        setMostrarFormulario(true);
      }
      
    } catch (error) {
      console.error('Erro ao gerar PIX:', error);
      setErroPix('Erro ao gerar código PIX. Por favor, tente novamente.');
      setPayloadPix('');
    } finally {
      setGerandoPix(false);
    }
  };

  // Função para preencher valores rápidos
  const preencherValorRapido = (valorTeste) => {
    setValor(valorTeste.toString());
    setErroPix('');
    setPayloadPix('');
    
    // Seleciona o primeiro brinde se nenhum estiver selecionado
    if (!brindeSelecionado) {
      setBrindeSelecionado(opcoesBrindes[0]);
    }
  };

  // Função para copiar código PIX
  const copiarCodigoPix = () => {
    if (payloadPix) {
      navigator.clipboard.writeText(payloadPix)
        .then(() => {
          setCopiado(true);
          setTimeout(() => setCopiado(false), 3000);
        })
        .catch(err => {
          console.error('Erro ao copiar:', err);
          setErroPix('Não foi possível copiar. Tente manualmente.');
        });
    }
  };

  // Função para enviar formulário
  const onSubmit = async (data) => {
    const dadosCompletos = {
      ...data,
      valorDoado: parseFloat(valor),
      brindeEscolhido: brindeSelecionado?.nome || 'Nenhum brinde selecionado',
      dataDoacao: new Date().toISOString()
    };
    
    try {
      const response = await axios.post(`${API_BASE_URL_DOACOES}/doacoes`, dadosCompletos);
      // console.log('Resposta do servidor:', response.data);
    } catch (error) {
      console.error('Erro ao enviar:', error);
    }
    

    // Mostra confirmação
    setDoacaoConcluida(true);
    
    // Reseta formulário após 5 segundos
    setTimeout(() => {
      reset();
      setDoacaoConcluida(false);
      setMostrarFormulario(false);
      setPayloadPix('');
      setValor('');
      setBrindeSelecionado(null);
    }, 5000);
  };

  return (
    <div className="page-wrapper campanha-page">
      <Navbar />

      <main className="campanha-main">
        {/* Banner da Campanha */}
        <section className="campanha-banner">
          <div className="banner-container">
            <div 
              className="banner-main-image"
              style={{ 
                backgroundImage: `url('https://somosconexaosocial.org/site_img/seja_mudanca/mudanca-banner.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              aria-label="Banner da campanha Seja a Mudança"
            >
              <div className="banner-gradient">
                <div className="banner-content">
                  <div className="banner-call">
                    <h1 className="banner-title">
                      <span className="banner-highlight">Mudar o mundo</span><br/>
                      começa com a sua atitude.
                    </h1>
                    <p className="banner-subtitle">
                      Doe agora e receba um brinde exclusivo da campanha
                    </p>
                    {/* <div className="banner-badges">
                      <span className="badge">Ecobag a partir de R$ 30</span>
                      <span className="badge">Camisa a partir de R$ 50</span>
                      <span className="badge">Copo Térmico a partir de R$ 55</span>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Introdução */}
        <section className="intro-section">
          <div className="container">
            <div className="intro-text">
              <h1 className="campanha-title">
                Seja a <span className="highlight-yellow">Mudança</span> que você quer ver no mundo
              </h1>
              
              <div className="mission-statement">
                <p className="lead">
                  A transformação social começa com um gesto simples: <strong>agir</strong>. Inspirados por Gandhi, 
                  criamos um movimento que conecta pessoas dispostas a apoiar projetos sociais que geram 
                  impacto real nas comunidades.
                </p>
                
                <p className="lead">
                  Cada doação fortalece iniciativas que promovem educação, inclusão e dignidade. 
                  Ao participar, você se torna parte ativa dessa transformação e inspira outras 
                  pessoas a fazerem o mesmo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Brindes */}
        <section className="brindes-section">
          <div className="container">
            <h2 className="section-title">
              Faça sua doação e escolha seu <span className="highlight-blue">brinde</span>
            </h2>
            
            <p className="section-subtitle">
              Todos os brindes estão disponíveis para seleção
            </p>
            
            <div className="brindes-grid">
              {opcoesBrindes.map((brinde) => {
                const valorAtual = parseFloat(valor) || 0;
                const selecionado = brindeSelecionado?.id === brinde.id;
                
                return (
                  <div 
                    key={brinde.id} 
                    className={`brinde-card ${selecionado ? 'selected' : ''}`}
                    style={{ borderColor: brinde.cor }}
                    onClick={() => setBrindeSelecionado(brinde)}
                  >
                    {/* Indicador de seleção */}
                    {/* {selecionado && (
                      <div className="selected-indicator" style={{ backgroundColor: brinde.cor }}>
                        <span>✓ SELECIONADO</span>
                      </div>
                    )} */}
                    
                    <div className="brinde-header" style={{ backgroundColor: brinde.cor }}>
                      <h3>{brinde.nome}</h3>
                      <span className="valor-minimo">A partir de R$ {brinde.valorMinimo.toFixed(2)}</span>
                    </div>
                    
                    <div className="brinde-carousel">
  <PhotoProvider>
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      speed={500}
    >
      {brinde.imagens.map((img, index) => (
        <SwiperSlide key={index}>
          <PhotoView src={img}>
            <div className="slide-image-container">
              <img 
                src={img} 
                alt={`${brinde.nome} - imagem ${index + 1}`}
                className="brinde-image"
                loading="lazy"
              />
            </div>
          </PhotoView>
        </SwiperSlide>
      ))}
    </Swiper>
  </PhotoProvider>
</div>
                    
                    <div className="brinde-info">
                      <p>{brinde.descricao}</p>
                      
                      <div className="brinde-status">
                        <span className="status-available" style={{ color: brinde.cor }}>
                          ✅ Disponível a partir de R$ {brinde.valorMinimo.toFixed(2)}
                        </span>
                      </div>
                      
                      {!selecionado && (
                        <button 
                          className="btn-selecionar"
                          style={{ backgroundColor: brinde.cor }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setBrindeSelecionado(brinde);
                          }}
                        >
                          Selecionar este brinde
                        </button>
                      )}
                      
                      {selecionado && (
                        <div className="selected-confirmation">
                          <span style={{ color: brinde.cor, fontWeight: 'bold' }}>
                            ✓ Brinde selecionado
                          </span>
                          <small>Será enviado após confirmação do pagamento</small>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Legenda de status */}
            <div className="legenda-status">
              <div className="legenda-item">
                <div className="legenda-color available"></div>
                <span>Disponível</span>
              </div>
              <div className="legenda-item">
                <div className="legenda-color selected"></div>
                <span>Selecionado</span>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Doação */}
        <section className="doacao-section">
          <div className="container">
            <div className="doacao-wrapper">
              <div className="doacao-formulario">
                <h3 className="methods-title">Escolha o valor da sua doação</h3>
                
                <div className="pix-generator-box">
                  <form onSubmit={handleGerarPix} className="pix-form">
                    <label htmlFor="valorPix">Valor da doação (R$)</label>
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
                          setPayloadPix('');
                        }}
                        disabled={gerandoPix}
                      />
                      <button 
                        type="submit" 
                        disabled={gerandoPix || !valor}
                        className={gerandoPix ? 'loading' : 'btn-doar'}
                      >
                        {gerandoPix ? 'Gerando...' : 'Gerar QR Code PIX'}
                      </button>
                    </div>
                    
                    {/* Botões de valor rápido */}
                    <div className="quick-values">
                      <p>Valores sugeridos:</p>
                      <div className="quick-buttons">
                        {[30, 50, 55, 100, 200].map((quickVal) => (
                          <button
                            key={quickVal}
                            type="button"
                            onClick={() => preencherValorRapido(quickVal)}
                            className={`quick-btn ${parseFloat(valor) === quickVal ? 'active' : ''}`}
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

                  {/* QR Code PIX */}
                  {payloadPix && (
                    <div className="pix-result fadeIn">
                      <h4>QR Code PIX para R$ {parseFloat(valor).toFixed(2).replace('.', ',')}</h4>
                      
                      <div className="qr-frame">
                        <QRCodeSVG 
                          value={payloadPix} 
                          size={220}
                          level="M"
                          includeMargin={true}
                          bgColor="#ffffff"
                          fgColor="#3460aa"
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
                        <button 
                          onClick={copiarCodigoPix}
                          className={copiado ? 'copied' : ''}
                        >
                          {copiado ? '✓ Copiado!' : 'Copiar Código PIX'}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Formulário de Dados Pessoais */}
              {mostrarFormulario && !doacaoConcluida && (
                <div className="dados-formulario">
                  <h3>Receba seu brinde</h3>
                  <p className="form-intro">
                    Para enviarmos seu brinde, precisamos dos seguintes dados:
                  </p>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="dados-form">
                    <div className="form-grid">
                      <div className="form-group">
                        <label htmlFor="nome">Nome Completo *</label>
                        <input
                          id="nome"
                          type="text"
                          {...register("nome", { required: "Nome é obrigatório" })}
                          className={errors.nome ? 'error' : ''}
                        />
                        {errors.nome && <span className="error-message">{errors.nome.message}</span>}
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="email">E-mail *</label>
                        <input
                          id="email"
                          type="email"
                          {...register("email", { 
                            required: "E-mail é obrigatório",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "E-mail inválido"
                            }
                          })}
                          className={errors.email ? 'error' : ''}
                        />
                        {errors.email && <span className="error-message">{errors.email.message}</span>}
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="celular">Celular *</label>
                        <input
                          id="celular"
                          type="tel"
                          {...register("celular", { 
                            required: "Celular é obrigatório",
                            pattern: {
                              value: /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
                              message: "Celular inválido"
                            }
                          })}
                          placeholder="(81) 97343-2071"
                          className={errors.celular ? 'error' : ''}
                        />
                        {errors.celular && <span className="error-message">{errors.celular.message}</span>}
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="cep">CEP *</label>
                        <input
                          id="cep"
                          type="text"
                          {...register("cep", { 
                            required: "CEP é obrigatório",
                            pattern: {
                              value: /^\d{5}-?\d{3}$/,
                              message: "CEP inválido"
                            }
                          })}
                          className={errors.cep ? 'error' : ''}
                        />
                        {errors.cep && <span className="error-message">{errors.cep.message}</span>}
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="endereco">Endereço *</label>
                        <input
                          id="endereco"
                          type="text"
                          {...register("endereco", { required: "Endereço é obrigatório" })}
                          className={errors.endereco ? 'error' : ''}
                        />
                        {errors.endereco && <span className="error-message">{errors.endereco.message}</span>}
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="numero">Número *</label>
                        <input
                          id="numero"
                          type="text"
                          {...register("numero", { required: "Número é obrigatório" })}
                          className={errors.numero ? 'error' : ''}
                        />
                        {errors.numero && <span className="error-message">{errors.numero.message}</span>}
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="cidade">Cidade *</label>
                        <input
                          id="cidade"
                          type="text"
                          {...register("cidade", { required: "Cidade é obrigatória" })}
                          className={errors.cidade ? 'error' : ''}
                        />
                        {errors.cidade && <span className="error-message">{errors.cidade.message}</span>}
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="complemento">Complemento</label>
                        <input
                          id="complemento"
                          type="text"
                          {...register("complemento")}
                        />
                      </div>
                    </div>
                    
                    {/* Resumo da Doação */}
                    <div className="resumo-doacao">
                      <h4>📋 Resumo da sua doação:</h4>
                      <div className="resumo-detalhes">
                        <div className="resumo-item">
                          <span className="resumo-label">Valor doado:</span>
                          <span className="resumo-valor">R$ {parseFloat(valor).toFixed(2).replace('.', ',')}</span>
                        </div>
                        
                        <div className="resumo-item">
                          <span className="resumo-label">Brinde escolhido:</span>
                          <div className="brinde-resumo">
                            {brindeSelecionado ? (
                              <>
                                <div 
                                  className="brinde-color-indicator"
                                  style={{ backgroundColor: brindeSelecionado.cor }}
                                ></div>
                                <div>
                                  <strong>{brindeSelecionado.nome}</strong>
                                  <small>{brindeSelecionado.descricao}</small>
                                </div>
                              </>
                            ) : (
                              <span className="sem-brinde">Nenhum brinde selecionado</span>
                            )}
                          </div>
                        </div>
                        
                        {brindeSelecionado && (
                          <div className="aviso-envio">
                            <div className="aviso-icon">🚚</div>
                            <div>
                              <p><strong>Seu brinde será enviado!</strong></p>
                              <small>Após confirmação do pagamento, enviaremos para o endereço cadastrado.</small>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <button type="submit" className="btn-confirmar">
                      Confirmar Dados e Finalizar
                    </button>
                  </form>
                </div>
              )}

              {/* Confirmação de Doação */}
              {doacaoConcluida && (
                <div className="confirmacao-doacao">
                  <div className="checkmark">✓</div>
                  <h3>Doação Registrada com Sucesso!</h3>
                  <p>Obrigado por fazer parte da mudança. Em breve você receberá um e-mail com os detalhes.</p>
                  <p>Envie o comprovante do PIX para <strong>administrativo@aconexaosocial.org</strong></p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Seção de Contato */}
        <section className="contato-section">
          <div className="container">
            <h2 className="section-title">Dúvidas ou Informações</h2>
            <div className="contato-info">
              <div className="contato-item">
                <div className="contato-icon">📧</div>
                <div className="contato-detalhes">
                  <h4>E-mail</h4>
                  <a href="mailto:administrativo@aconexaosocial.org">
                    administrativo@aconexaosocial.org
                  </a>
                </div>
              </div>
              
              <div className="contato-item">
                <div className="contato-icon">📱</div>
                <div className="contato-detalhes">
                  <h4>Telefone/WhatsApp</h4>
                  <a href="https://wa.me/5581973432071" target="_blank" rel="noopener noreferrer">
                    (81) 97343-2071
                  </a>
                </div>
              </div>
              
              <div className="contato-item">
                <div className="contato-icon">🏢</div>
                <div className="contato-detalhes">
                  <h4>Associação Conexão Social</h4>
                  <p>Transformando vidas através da educação e inclusão social</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Frase Final */}
        <section className="frase-final-section">
          <div className="container">
            <div className="frase-box">
              <h2 className="frase-impactante">
                "Sua doação não é apenas um valor, é um <span className="underline-yellow">voto de confiança</span> 
                <br/>no futuro que estamos construindo juntos."
              </h2>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default SejaMudanca;