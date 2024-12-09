const importAll = (r) => r.keys().map(r);

const mainHome = importAll(require.context("../img/mainHome/main_home", false, /\.(png|jpe?g|svg)$/));






export const mainQuemSomos = [

    {
      id: 0,
      reverse:"reverse",
      imagem: mainHome[0],
      titulo: 'Quem Somos?',
      slideProjeto: 'A Associação Conexão Social (ACS) é uma organização da sociedade civil sem fins lucrativos que foi fundada em maio de 2005 no município de Lagoa de Itaenga, na zona da Mata Norte de Pernambuco. A organização possui o objetivo principal de mobilizar a população em busca da garantia dos direitos das pessoas em situação de vulnerabilidade social. Acreditando que a educação é uma poderosa ferramenta para a transformação social, a ACS atende em seus projetos, crianças, adolescentes, jovens, mulheres e idosos.'

        
    },
    {
      id: 1,
      reverse:"",
      imagem: mainHome[1],
      titulo: 'Missão',
      slideProjeto: 'Impulsionamos a inclusão social por meio da conexão com projetos inovadores de educação transformadora.'

        
    },
    {
      id: 2,
      reverse:"reverse",
      imagem: mainHome[2],
      titulo: 'Visão',
      slideProjeto: 'Em 2030, a Conexão Social é referência no Brasil pelo seu trabalho de inclusão social e seu compromisso com a promoção de práticas sustentáveis e soluções inovadoras'

        
    },

    {
      id: 2,
      reverse:"",
      imagem: mainHome[3],
      titulo: 'Valores',
      slideProjeto: 'Acolhimentoe Qualidade nos Serviços; Aprendizadoe Desenvolvimento; Compromissoe Resiliência; Conexão Social e Trabalho em Rede; Empatia e Cuidado; Ética e Transparência; Inclusão e Participação; Inovaçãoe Adaptabilidade; Respeitoe Diversidade; Responsabilidade Social e Ambiental; Senso de Justiça e Colaboração; Solidariedade e Comunidade.'

        
    },

      




];
