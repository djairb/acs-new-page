export const projetosTexto = [
    
    'A iniciativa promove a inclusão das pessoas idosas no meio digital e social. Segundo o “Pew Research Center”, em 2021, de aproximadamente 29 milhões de brasileiros idosos, apenas 5 milhões estavam conectados, ou seja, 80% dos idosos brasileiros não aproveitam os benefícios da tecnologia. Diante disso, o projeto surgiu para estimular o envelhecimento ativo e saudável dos participantes e, assim, fortalecer os seus vínculos comunitários. Um conjunto de atividades são oferecidas pela a ACS, inclusive atividades físicas como a hidroginástica, que tem por finalidade alcançar habilidades que resultem em um melhor desempenho dos idosos em suas atividades cotidianas.',
    'O projeto consiste na formação profissional de adolescentes e jovens na área da tecnologia e inovação. A iniciativa desenvolve atividades que têm por finalidade o alcance do conhecimento teórico e prático, além das habilidades e atitudes que resultem em um melhor desempenho e proatividade dos participantes em suas futuras carreiras profissionais. Com isso, o Passaporte Digital contribui diretamente na ampliação da oferta de mão de obra qualificada para diversos setores que necessitam da tecnologia, além de estimular o empreendedorismo dos participantes através de seu domínio dos princípios da tecnologia digital da informação e comunicação.',
    'O esporte é uma ação de representação do comportamento sócio-político e também uma das mais importantes expressões culturais que entrou definitivamente na pauta das exigências educacionais, sociais, políticas e econômicas da promoção humana e do desenvolvimento das sociedades contemporâneas. Partindo deste princípio, o Projeto Centro de Formação desenvolve um trabalho com adolescentes que estimula a evolução física e social dos participantes através da prática dos esportes, em especial da modalidade “futebol de campo”, melhorando sua saúde e qualidade de vida. Possuindo como objetivo principal a formação dos participantes como atletas e também como cidadãos.',    
    'O Projeto Oportunizar Comunidade Urbano trata-se de uma ação específica para crianças e adolescentes, com foco no incentivo a prática de esportes educativos e recreativos, do protagonismo e da integração entre as entidades da sociedade civil e das escolas públicas. Em um trabalho conjunto com as instituições educacionais, são oferecidas várias atividades atrativas aos participantes nos turnos em que não estiverem tendo aulas na escola. Com isso, a iniciativa realiza uma enorme transformação na rotina das crianças e adolescentes que participam, principalmente na intervenção contra a violência, os ocupando através do esporte inclusivo e, assim, salvando diversas vidas.',
    'Com o sucesso do Projeto Oportunizar Comunidade Urbano, surgiu o Projeto Oportunizar Comunidade Rural que trata-se de uma ação específica para crianças e adolescentes das áreas rurais, com foco no incentivo a prática de esportes educativos e recreativos, do protagonismo e da integração entre as entidades da sociedade civil e das escolas públicas. Em um trabalho conjunto com as instituições educacionais, são oferecidas várias atividades atrativas aos participantes nos turnos em que não estiverem tendo aulas na escola. Realizando também na área rural uma enorme transformação na rotina dos envolvidos, principalmente na intervenção contra a violência, os ocupando através do esporte inclusivo e, assim, salvando diversas vidas.',
    'O projeto “VamoSimbora” possui o intuito de contribuir com a “autonomia e participação" da pessoa idosa e suas famílias na sociedade. Com o objetivo de promover a participação ativa e contínua para que se reconheçam como atores sociais corresponsáveis pela Política Municipal da Pessoa Idosa. A proposta visa, sobretudo, oferecer alternativas para o desenvolvimento local do município de Lagoa de Itaenga-PE e minimizar os riscos e as condições de vulnerabilidade a que estão sujeitas.'



];

const importAll = (r) => r.keys().map(r);

const logosProjetos = importAll(require.context("../src/img/logos-projetos", false, /\.(png|jpe?g|svg)$/));

const red = importAll(require.context("../src/img/mainHome/red", false, /\.(png|jpe?g|svg)$/));

const blue = importAll(require.context("../src/img/mainHome/blue", false, /\.(png|jpe?g|svg)$/));



export const mainHomeData = [

    {
        id: 0,
        reverse:"reverse",
        logoProjeto: logosProjetos[0],
        textoProjeto: 'A iniciativa promove a inclusão das pessoas idosas no meio digital e social. Segundo o “Pew Research Center”, em 2021, de aproximadamente 29 milhões de brasileiros idosos, apenas 5 milhões estavam conectados, ou seja, 80% dos idosos brasileiros não aproveitam os benefícios da tecnologia. Diante disso, o projeto surgiu para estimular o envelhecimento ativo e saudável dos participantes e, assim, fortalecer os seus vínculos comunitários. Um conjunto de atividades são oferecidas pela a ACS, inclusive atividades físicas como a hidroginástica, que tem por finalidade alcançar habilidades que resultem em um melhor desempenho dos idosos em suas atividades cotidianas.',
        slideProjeto: red,

        
      },

      {
        id: 1,
        reverse:"",
        logoProjeto: logosProjetos[1],
        textoProjeto: 'Outro pai, so vamo',
        slideProjeto: blue,

        
      },




];
