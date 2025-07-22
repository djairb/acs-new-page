const importAll = (r) => r.keys().map(r);

const logosProjetos = importAll(require.context("../img/logos-projetos", false, /\.(png|jpe?g|svg)$/));

export const logosOds = importAll(require.context("../img/ods-home", false, /\.(png|jpe?g|svg)$/));

const projetoImagens = {
    'Centro Formação': logosProjetos[2],
    'Conecta Vidas': logosProjetos[0],
    'Oportunizar Rural': logosProjetos[4],
    'Oportunizar Urbano': logosProjetos[3],
    'Oportunizar Comunidade': logosProjetos[9],
    'Passaporte Digital': logosProjetos[1],
    'Skate Livre': logosProjetos[6],
    'VamoSimbora?': logosProjetos[5],
    'Tecnologia com Elas': logosProjetos[7],
    'Projeto Sementes': logosProjetos[8]
};

export const odsHomeData = [

  {
    id: 0,
    frase:"ODS 1 - Erradicação da Pobreza",
    color:'#e5243b',
    logoOds: logosOds[0],
    listaProjetos: [
      {
        projetoLogo: projetoImagens['Oportunizar Rural'],
        descricao: "Atua na inclusão social de crianças e adolescentes rurais, oferecendo oportunidades que podem romper ciclos de pobreza."
      },
      {
        projetoLogo: projetoImagens['VamoSimbora?'],
        descricao: "Atua na redução da vulnerabilidade social dos idosos, contribuindo para sua autonomia econômica e social."
      },
      {
        projetoLogo: projetoImagens['Passaporte Digital'],
        descricao: "Ao capacitar jovens em eventuais situações de vulnerabilidades socioeconômicas, auxilia na erradicação da pobreza."
      },
      {
        projetoLogo: projetoImagens['Tecnologia com Elas'],
        descricao: "Atua diretamente na superação da pobreza feminina ao capacitar mulheres para geração de renda através da tecnologia, promovendo autonomia econômica sustentável."
      },
      {
        projetoLogo: projetoImagens['Projeto Sementes'],
        descricao: "Ao capacitar jovens em eventuais situações de vulnerabilidades socioeconômicas, auxilia na erradicação da pobreza."
      }

    ],


  },
   {
    id: 1,
    frase:"ODS 2 - Fome Zero e Agricultura Sustentável",
    color:'#dda83a',
    logoOds: logosOds[1],
    listaProjetos: [
      {
        projetoLogo: projetoImagens['Centro Formação'],
        descricao: "Combate a fome por meio da profissionalização dos seus participantes nos esportes oferecidos."
      },
      {
        projetoLogo: projetoImagens['Conecta Vidas'],
        descricao: "Promove a Agricultura Sustentável através do ensino de formas agrícolas eficazes."
      },
      {
        projetoLogo: projetoImagens['Oportunizar Rural'],
        descricao: "Com atividades recreativas no meio rural, geram a conscientização da importância do cuidado com o solo."
      },
      {
        projetoLogo: projetoImagens['Oportunizar Urbano'],
        descricao: "Eficaz no combate a fome pela promoção de recreação educativa que contribui na formação de seus usuários."
      },
      {
        projetoLogo: projetoImagens['Oportunizar Comunidade'],
        descricao: "Com ensinos repassados por atividades recreativas geram conscientização e mobilização profissional eficiente."
      },
      {
        projetoLogo: projetoImagens['Passaporte Digital'],
        descricao: "Com cursos profissionalizantes, capacitam jovens ao mercado de trabalho, combatendo a fome."
      },
      {
        projetoLogo: projetoImagens['Skate Livre'],
        descricao: "Reduz a taxa de fome entre os jovens por ofertar intervalos de lanches nutricionalmente equilibrados para seus integrantes."
      },
      {
        projetoLogo: projetoImagens['VamoSimbora?'],
        descricao: "Com aprendizados práticos e instrução tecnológica adequada, conscientiza seus partipantes da agricultura sustentável."
      },
      {
        projetoLogo: projetoImagens['Tecnologia com Elas'],
        descricao: "Combate a fome por meio da profissionalização das mulheres que integram o projeto."
      },
      {
        projetoLogo: projetoImagens['Projeto Sementes'],
        descricao: "Trazendo mais oportunidades de profissionalização dos jovens, combate a fome por meio da capacitação profissional."
      },
      

    ],


  },
  {
    id: 2,frase:"ODS 3 - Saúde e Bem-Estar",
    color:'#4c9f38',
    logoOds: logosOds[2],
    listaProjetos: [
      {
        projetoLogo: projetoImagens['Conecta Vidas'],
        descricao: "Promove o envelhecimento ativo e saudável por meio de atividades físicas (como hidroginástica) e inclusão digital, melhorando a qualidade de vida dos idosos."
      },
      {
        projetoLogo: projetoImagens['Centro Formação'],
        descricao: "Promove a saúde física e mental dos adolescentes através da prática esportiva, melhorando sua qualidade de vida."
      },
      {
        projetoLogo: projetoImagens['Oportunizar Urbano'],
        descricao: "Promove a saúde física e mental de crianças e adolescentes através de práticas esportivas e recreativas."
      },
      {
        projetoLogo: projetoImagens['Oportunizar Rural'],
        descricao: "Promove saúde física e mental através de atividades esportivas e recreativas em áreas rurais."
      },
      {
        projetoLogo: projetoImagens['VamoSimbora?'],
        descricao: "Promove envelhecimento ativo e saudável, melhorando a qualidade de vida dos idosos."
      },
      {
        projetoLogo: projetoImagens['Skate Livre'],
        descricao: "Promove a saúde física e mental de crianças e adolescentes através da prática esportiva do skate."
      },
      {
        projetoLogo: projetoImagens['Oportunizar Comunidade'],
        descricao: "Promove saúde física e mental através da prática esportiva regular. Estimula hábitos saudáveis desde a infância e adolescência."
      }

    ],


  },
  {
    id: 3,
    frase:"ODS 4 - Educação de Qualidade",
    color:'#c5192d',
    logoOds: logosOds[3],
    listaProjetos: [
      {
        projetoLogo: projetoImagens['Conecta Vidas'],
        descricao: "Oferece capacitação digital para idosos, garantindo que eles adquiram habilidades tecnológicas essenciais para a vida moderna."
      },
      {
        projetoLogo: projetoImagens['Passaporte Digital'],
        descricao: "Promove a formação profissional de adolescentes e jovens em tecnologia, garantindo acesso a conhecimentos teóricos e práticos para melhorar suas habilidades e empregabilidade."
      },
      {
        projetoLogo: projetoImagens['Centro Formação'],
        descricao: "Contribui para a formação integral dos jovens, combinando esporte com valores educacionais e cidadania."
      },
      {
        projetoLogo: projetoImagens['Oportunizar Urbano'],
        descricao: "Complementa a formação escolar com atividades educativas e esportivas, fortalecendo o desenvolvimento integral."
      },
      {
        projetoLogo: projetoImagens['Oportunizar Rural'],
        descricao: "Complementa a educação formal com atividades extracurriculares esportivas, contribuindo para o desenvolvimento integral."
      },
      {
        projetoLogo: projetoImagens['Skate Livre'],
        descricao: "Contribui para a formação integral dos participantes, desenvolvendo habilidades socioemocionais e cidadania."
      },
      {
        projetoLogo: projetoImagens['Tecnologia com Elas'],
        descricao: "Oferece capacitação tecnológica para mulheres, promovendo educação inclusiva e formação profissional relevante."
      },
      {
        projetoLogo: projetoImagens['Projeto Sementes'],
        descricao: "Oferece formação técnica especializada em Infraestrutura de Redes, promovendo educação técnica profissionalizante de alto nível para o mercado de trabalho."
      },
      {
        projetoLogo: projetoImagens['Oportunizar Comunidade'],
        descricao: "Desenvolve habilidades socioemocionais como trabalho em equipe, disciplina e liderança. Complementa a educação formal com valores aprendidos no esporte."
      }

    ],


  },
  {
    id: 4,
    frase:"ODS 5 - Igualdade de Gênero",
    color:'#ff3a21',
    logoOds: logosOds[4],
    listaProjetos: [
      {
        projetoLogo: projetoImagens['Centro Formação'],
        descricao: "Incluindo meninas e meninos em igualdade de oportunidades no esporte, ajuda a reduzir disparidades de gênero."
      },
      {
        projetoLogo: projetoImagens['Passaporte Digital'],
        descricao: "Promove a igualdade oferencendo oportunidades de capacitação profissional para jovens de forma igualitária, independete de seus gêneros."
      },
      {
        projetoLogo: projetoImagens['Projeto Sementes'],
        descricao: "Capacitando tanto meninas quantos meninos ao mercado de trabalho, sem distinção de gênero, promove e garante a igualdade."
      },
      {
        projetoLogo: projetoImagens['Oportunizar Urbano'],
        descricao: "Ofertando oportunidades igualitárias para meninos e meninas, contribui para reduzir disparidades de gênero no esporte."
      },
      {
        projetoLogo: projetoImagens['Oportunizar Rural'],
        descricao: "Combate as desigualdades de gênero no meio rural incluindo tanto meninas e meninos nas atividades esportivas."
      },
      {
        projetoLogo: projetoImagens['Skate Livre'],
        descricao: "Inclui meninas e meninos em igualdade de condições, combatendo estereótipos de gênero no esporte."
      },
      {
        projetoLogo: projetoImagens['Tecnologia com Elas'],
        descricao: "Empodera mulheres através da tecnologia, reduzindo disparidades de gênero no setor digital e empreendedor."
      },
      {
        projetoLogo: projetoImagens['Oportunizar Comunidade'],
        descricao: "Combate estereótipos de gênero no esporte por meio da oferta de oportunidades iguais para meninos e meninas."
      }

    ],


  },
  {
    id: 5,
    frase:"ODS 8 - Trabalho Descente e Crescimento Econômico",
    color:'#a21942',
    logoOds: logosOds[7],
    listaProjetos: [

      {
        projetoLogo: projetoImagens['Passaporte Digital'],
        descricao: "Contribui para a geração de mão de obra qualificada em tecnologia, impulsionando oportunidades de emprego e empreendedorismo entre os jovens."
      },
      {
        projetoLogo: projetoImagens['Tecnologia com Elas'],
        descricao: "Promove empreendedorismo feminino e independência financeira, gerando oportunidades de trabalho digno."
      },
      {
        projetoLogo: projetoImagens['Projeto Sementes'],
        descricao: "Prepara jovens para oportunidades profissionais qualificadas em um setor em expansão, fomentando empregabilidade e crescimento econômico inclusivo."
      }
    ],


  },
  {
    id: 6,
    frase:"ODS 9 - Indústria, Inovação e Infraestrutura",
    color:'#fd6925',
    logoOds: logosOds[8],
    listaProjetos: [
      
      {
        projetoLogo: projetoImagens['Passaporte Digital'],
        descricao: "Fomenta a inovação tecnológica e o desenvolvimento de competências digitais, alinhando-se às demandas do mercado de trabalho moderno."
      },
      {
        projetoLogo: projetoImagens['Tecnologia com Elas'],
        descricao: "Fomenta a inclusão digital feminina e o uso de tecnologias inovadoras para o desenvolvimento."
      },
      {
        projetoLogo: projetoImagens['Projeto Sementes'],
        descricao: "Capacita mão de obra para setores tecnológicos estratégicos, fortalecendo a infraestrutura digital, promovendo inovação através da qualificação profissional."
      }
    ],


  },
  {
    id: 7,
    frase:"ODS 10 - Redução das Desigualdades",
    color:'#dd1367',
    logoOds: logosOds[9],
    listaProjetos: [
      
      {
        projetoLogo: projetoImagens['Conecta Vidas'],
        descricao: "Combate a exclusão digital e social dos idosos, um grupo frequentemente marginalizado no acesso à tecnologia e participação comunitária."
      },
      {
        projetoLogo: projetoImagens['Passaporte Digital'],
        descricao: "Oferece capacitação a jovens, reduzindo disparidades no acesso à educação tecnológica e oportunidades profissionais."
      },
      {
        projetoLogo: projetoImagens['Centro Formação'],
        descricao: "Oferece acesso ao esporte como ferramenta de inclusão social, especialmente para jovens em vulnerabilidade."
      },
      {
        projetoLogo: projetoImagens['Oportunizar Urbano'],
        descricao: "Promove inclusão social ao atender crianças e adolescentes em situação de vulnerabilidade, oferecendo alternativas à violência."
      },
      {
        projetoLogo: projetoImagens['Oportunizar Rural'],
        descricao: "Reduz disparidades urbano-rurais ao levar atividades esportivas e de inclusão para áreas remotas."
      },
      {
        projetoLogo: projetoImagens['VamoSimbora?'],
        descricao: "Combate a exclusão etária, garantindo participação social e reconhecimento dos idosos como atores sociais."
      },
      {
        projetoLogo: projetoImagens['Skate Livre'],
        descricao: "Oferece oportunidades para crianças e adolescentes, reduzindo disparidades sociais e econômicas."
      },
      {
        projetoLogo: projetoImagens['Tecnologia com Elas'],
        descricao: "Combate a exclusão socioeconômica de mulheres jovens no acesso à tecnologia e ao mercado de trabalho."
      },
      {
        projetoLogo: projetoImagens['Projeto Sementes'],
        descricao: "Democratiza o acesso a formação em tecnologia para jovens, reduzindo disparidades socioeconômicas."
      },
      {
        projetoLogo: projetoImagens['Oportunizar Comunidade'],
        descricao: "Promove inclusão social de crianças e adolescentes, independentemente de origem ou condição socioeconômica."
      }
    ],


  },
  {
    id: 8,
    frase:"ODS 11 - Cidades e Comunidades Sustentáveis",
    color:'#fd9d24',
    logoOds: logosOds[10],
    listaProjetos: [
      
      {
        projetoLogo: projetoImagens['Conecta Vidas'],
        descricao: "Fortalece vínculos comunitários e promove a inclusão social dos idosos, tornando as cidades mais acolhedoras e participativas para todas as idades."
      },
      {
        projetoLogo: projetoImagens['Oportunizar Urbano'],
        descricao: "Fortalece a integração comunitária ao unir escolas, sociedade civil e espaços urbanos em prol da juventude."
      },
      {
        projetoLogo: projetoImagens['Oportunizar Rural'],
        descricao: "Fortalecimento comunitário rural através da integração entre escolas, sociedade civil e comunidades."
      },
      {
        projetoLogo: projetoImagens['VamoSimbora?'],
        descricao: "Fortalece o desenvolvimento local inclusivo em Lagoa de Itaenga-PE, integrando idosos no planejamento municipal."
      },
      {
        projetoLogo: projetoImagens['Skate Livre'],
        descricao: "Transforma espaços urbanos em áreas de convivência e prática esportiva inclusiva."
      },
      {
        projetoLogo: projetoImagens['Oportunizar Comunidade'],
        descricao: "Fortalece vínculos comunitários através do esporte, criando espaços de convivência saudável."
      }
    ],
  },
  {
    id: 9,
    frase:"ODS 15 - Vida Terrestre",
    color:'#56c02b',
    logoOds: logosOds[14],
    listaProjetos: [
      
      {
        projetoLogo: projetoImagens['Oportunizar Rural'],
        descricao: "Ao utilizar espaços naturais rurais para atividades esportivas, promove consciência ambiental."
      },
      {
        projetoLogo: projetoImagens['Conecta Vidas'],
        descricao: "Promove a agricultura sustentável oferecendo educação ambiental consciente e relevante."
      },
      {
        projetoLogo: projetoImagens['VamoSimbora?'],
        descricao: "Capacita as comunidades participantes para um manejo responsável da terra e dos recursos naturais."
      }
    ],
  },
  {
    id: 10,
    frase:"ODS 16 - Paz, Justiça e Instituições Eficazes",
    color:'#00689d',
    logoOds: logosOds[15],
    listaProjetos: [
      
      {
        projetoLogo: projetoImagens['Centro Formação'],
        descricao: "Fortalece a formação cidadã, promovendo valores como trabalho em equipe, disciplina e respeito, essenciais para sociedades pacíficas."
      },
      {
        projetoLogo: projetoImagens['Oportunizar Urbano'],
        descricao: "Atua na prevenção da violência ao ocupar jovens com atividades positivas, construindo uma cultura de paz"
      },
      {
        projetoLogo: projetoImagens['Oportunizar Rural'],
        descricao: "Prevenção da violência rural através do esporte como ferramenta de pacificação social."
      },
      {
        projetoLogo: projetoImagens['VamoSimbora?'],
        descricao: "Empodera os idosos para participação na Política Municipal da Pessoa Idosa, fortalecendo governança inclusiva."
      },
      {
        projetoLogo: projetoImagens['Skate Livre'],
        descricao: "Forma cidadãos conscientes e responsáveis, contribuindo para uma cultura de paz."
      },
      {
        projetoLogo: projetoImagens['Oportunizar Comunidade'],
        descricao: "Previne violência e conflitos ao ocupar jovens com atividades positivas e construtivas."
      }
      
    ],
  },
  {
  id: 11,
  frase:"ODS 17 - Parcerias e Meios de Implementação",
  color:'#19486a',
  logoOds: logosOds[16],
  listaProjetos: [
    
    {
      projetoLogo: projetoImagens['Conecta Vidas'],
      descricao: "Envolve a colaboração de organizações (como a ACS) e possivelmente parcerias público-privadas para viabilizar o projeto."
    },
    {
      projetoLogo: projetoImagens['Passaporte Digital'],
      descricao: "Envolvendo colaborações com empresas, governos e instituições de ensino para viabilizar o projeto e ampliar seu impacto."
    },
    {
      projetoLogo: projetoImagens['Centro Formação'],
      descricao: "Envolve colaborações com clubes, governos e instituições sociais para ampliar seu alcance e impacto."
    },
    {
      projetoLogo: projetoImagens['Oportunizar Urbano'],
      descricao: "Envolve colaboração entre escolas, entidades civis e governo, exemplificando parcerias para o desenvolvimento."
    },
    {
      projetoLogo: projetoImagens['Oportunizar Rural'],
      descricao: "Colaboração entre escolas, comunidades rurais e organizações civis para implementação do projeto."
    },
    {
      projetoLogo: projetoImagens['VamoSimbora?'],
      descricao: "Envolve articulação com governo local e sociedade civil para implementação de políticas públicas."
    },
    {
      projetoLogo: projetoImagens['Skate Livre'],
      descricao: "Realizado em parceria com o Programa Skate pela Mudança Social, exemplificando colaboração para o desenvolvimento."
    },
    {
      projetoLogo: projetoImagens['Tecnologia com Elas'],
      descricao: "Potencialmente envolve colaborações com empresas de tecnologia, governos e ONGs para ampliar seu alcance."
    }
    
  ],
  }

];
