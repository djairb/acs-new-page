const importAll = (r) => r.keys().map(r);

const colaboradores = importAll(require.context("../img/colaboradores", false, /\.(png|jpe?g|svg)$/));

export const parceirosList = [

    { id: 0, nome: "Albenice Santana", funcao: "Auxiliar", imagem: colaboradores[0] },
    { id: 1, nome: "André Albuquerque", funcao: "Educador", imagem: colaboradores[1] },
    { id: 2, nome: "Andreis Santos", funcao: "Coord. Pedagógico", imagem: colaboradores[2] },
    { id: 3, nome: "Anna Beatriz", funcao: "Enfermeira", imagem: colaboradores[3] },
    { id: 4, nome: "Aparício Luís", funcao: "Educador", imagem: colaboradores[4] },
    { id: 5, nome: "Arthur Yure", funcao: "Educador", imagem: colaboradores[5] },
    { id: 6, nome: "Beatriz Sandra", funcao: "Educadora", imagem: colaboradores[6] },
    { id: 8, nome: "Daniel Neto", funcao: "Educador", imagem: colaboradores[8] },
    { id: 9, nome: "Erika Maria", funcao: "Educadora", imagem: colaboradores[9] },
    { id: 10, nome: "Esmeralda Aparecida", funcao: "Psicóloga", imagem: colaboradores[10] },
    { id: 11, nome: "Fátima Ferreira", funcao: "Voluntária", imagem: colaboradores[11] },
    { id: 12, nome: "Geovane Lima", funcao: "Educador", imagem: colaboradores[12] },
    { id: 13, nome: "Iaura Lima", funcao: "Coordenadora Geral", imagem: colaboradores[13] },
    { id: 14, nome: "Iolanda Lima", funcao: "Assist. Financeiro", imagem: colaboradores[14] },
    { id: 15, nome: "Irlane Silva", funcao: "Educadora", imagem: colaboradores[15] },
    { id: 16, nome: "Jaciedina Camarotti", funcao: "Educadora", imagem: colaboradores[16] },
    { id: 17, nome: "Janailton Batista", funcao: "Educador", imagem: colaboradores[17] },
    { id: 18, nome: "Kleytton Diogenes", funcao: "Educador", imagem: colaboradores[18] },
    { id: 19, nome: "Leandro Alves", funcao: "Educador", imagem: colaboradores[19] },
    { id: 20, nome: "Lídia Beatriz", funcao: "Recepcionista", imagem: colaboradores[20] },
    { id: 21, nome: "Márcio Rodolfo", funcao: "Motorista", imagem: colaboradores[21] },
    { id: 22, nome: "Marcus Guilherme", funcao: "Educador", imagem: colaboradores[22] },
    { id: 23, nome: "Maria da Conceição", funcao: "Auxiliar", imagem: colaboradores[23] },
    { id: 24, nome: "Maria dos Santos", funcao: "Auxiliar", imagem: colaboradores[24] },
    { id: 25, nome: "Marília Eduarda", funcao: "Assist. Administrativo", imagem: colaboradores[25] },
    { id: 26, nome: "Mateus Ferreira", funcao: "Designer Gráfico", imagem: colaboradores[26] },
    { id: 27, nome: "Matheus Moura", funcao: "Auxiliar", imagem: colaboradores[27] },
    { id: 28, nome: "Natália Esmeralda", funcao: "Assist. Administrativo", imagem: colaboradores[28] },
    { id: 29, nome: "Patricia Alves", funcao: "Nutricionista", imagem: colaboradores[29] },
    { id: 30, nome: "Paulo Santana", funcao: "Coordenador", imagem: colaboradores[30] },
    { id: 31, nome: "Pedro Cândido", funcao: "Jornalista", imagem: colaboradores[31] },
    { id: 32, nome: "Raphael Andrade", funcao: "Educador", imagem: colaboradores[32] },
    { id: 33, nome: "Sessé Santos", funcao: "Coord. de Monitoramento", imagem: colaboradores[33] },
    { id: 34, nome: "Tatiane Silva", funcao: "Assistente Social", imagem: colaboradores[34] },
    { id: 35, nome: "Thiago Manuel", funcao: "Piscineiro", imagem: colaboradores[35] },
    { id: 36, nome: "Vitória Oliveira", funcao: "Educadora", imagem: colaboradores[36] },
    { id: 37, nome: "Wenderson Farias", funcao: "Educador", imagem: colaboradores[37] }
]
