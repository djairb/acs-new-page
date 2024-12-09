const express = require('express');
const app = express();
const cors = require('cors');

const mysql = require('mysql');


const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage });


const db = mysql.createPool({

    host:"localhost",
    user:"root",
    password:"Karolinne102",
    database:"import021224",
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res)=>{

    const {nome} = req.body;
    const {preco} = req.body;
    const {categoria} = req.body;

    let SQL = 'insert into games (nome, preco, categoria) values (?,?,?)';

    db.query(SQL, [nome, preco, categoria],(err, result)=>{
        console.log(err);
    });

    

});

app.get("/getCards", (req, res) =>{

    let SQL= "SELECT * FROM games";

    db.query(SQL, (err, result)=>{
        if (err) console.log(err);
        else res.send(result)
    });


});

// crtrl + ;

app.get("/", (req, res) => {
    res.send("rodando na 3002")
});

app.put("/edit", (req, res) =>{

    const {id} = req.body;
    const {nome} = req.body;
    const {preco} = req.body;
    const {categoria} = req.body;
 
    let SQL = "UPDATE games SET nome = ?, preco = ?, categoria = ? WHERE id = ?";

    db.query(SQL, [nome, preco, categoria, id], (err, result) =>{

        if(err) console.log(err);
        else console.log(result);


    })



})

app.delete("/delete/:id", (req, res) => {

    const {id} = req.params;

    let SQL  = "delete from games where id = ?";
    db.query(SQL, [id], (err, result) =>{

        if(err) console.log(err);
        else res.send(result);


    });



});




app.delete("/deleteAlunoById/:id", (req, res) => {

    const {id} = req.params;

    let SQL  = "delete from alunos where id_aluno = ?";
    db.query(SQL, [id], (err, result) =>{

        if(err) console.log(err);
        else res.send(result);


    });



});

app.delete("/deleteTurmaById/:id", (req, res) => {

    const {id} = req.params;

    console.log(id);

    let SQL  = "delete from turmas where id_turma = ?";
    db.query(SQL, [id], (err, result) =>{

        if(err) console.log(err);
        else res.send(result);

    });



});

app.delete("/deleteAulaById/:id", (req, res) => {

    const {id} = req.params;

    console.log(id);

    let SQL  = "delete from aulas where id_aula = ?";
    db.query(SQL, [id], (err, result) =>{

        if(err) console.log(err);
        else res.send(result);

    });



});

app.delete("/deleteFotoById/:id", (req, res) => {

    const {id} = req.params;

    let SQL  = "delete from fotos_aulas where id_foto_aula = ?";
    db.query(SQL, [id], (err, result) =>{

        if(err) console.log(err);
        else res.send(result);

    });



});





app.post("/getUserLogin", (req, res) => {
    const { usuario, senha, tipoUsuario } = req.body;

    if (!usuario || !senha || !tipoUsuario) {
        return res.status(400).send([]);
    }

    let SQL;
    if (tipoUsuario === "coordenador") {
        SQL = "SELECT * FROM coordenadores WHERE usuario = ?";
    } else if (tipoUsuario === "educador") {
        SQL = "SELECT * FROM educadores WHERE usuario = ?";
    } else {
        return res.status(400).send([]);
    }

    db.query(SQL, [usuario], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send([]);
        }

        if (results.length === 0) {
            return res.status(401).send([]);
        }

        const user = results[0];

        if (user.senha !== senha) {
            return res.status(401).send([]);
        }
        res.status(200).send([user]); 
    });
});


// app.post("/inserirTurma", (req, res) => {    

//     let { nome_turma, projeto, turno, id_educador } = req.body;


//     let SQL = 'insert into Turmas (nome_turma, turno, projeto, id_educador) values (?,?,?,?)';
 
//     // Executando a consulta com parâmetros seguros
//     db.query(SQL, [nome_turma, turno, projeto, id_educador], (err, result) => {
        
//         if (err) {
//             console.log(err);
//             res.status(500).send("Erro ao consultar banco de dados");
//         } else {
           
//             res.send(result);
//             // propriedade do objeto retornado pelo post

            
            
//         }
//     });
// });


const inserirAula = (id_turma, data_aula, descricao, id_educador) => {
    return new Promise((resolve, reject) => {
        let SQL = 'INSERT INTO aulas (id_turma, data_aula, descricao, id_educador) VALUES (?, ?, ?, ?)';
        db.query(SQL, [id_turma, data_aula, descricao, id_educador], (err, result) => {
            if (err) {
                reject("Erro ao inserir aula");
            } else {
                resolve(result.insertId);
            }
        });
    });
};

// Função para inserir presenças
const inserirPresenca = (listaAlunos, id_aula) => {
    let SQLAlunos = 'INSERT INTO presencas_aulas (id_aula, id_aluno, presente, justificativa) VALUES (?, ?, ?, ?)';

    let promises = listaAlunos.map(aluno => {
        return new Promise((resolve, reject) => {
            db.query(SQLAlunos, [id_aula, aluno.id_aluno, aluno.presente, aluno.justificativa], (err, result) => {
                if (err) {
                    reject("Erro ao inserir presença");
                } else {
                    resolve(result);
                }
            });
        });
    });

    return Promise.all(promises);
};

// Função para inserir imagens
const inserirImagens = (imagens, id_aula) => {
    let SQLImagens = 'INSERT INTO fotos_aulas (id_aula, nome_arquivo, arquivo_binario) VALUES (?, ?, ?)';

    let promises = imagens.map(imagem => {
        return new Promise((resolve, reject) => {
            db.query(SQLImagens, [id_aula, imagem.originalname, imagem.buffer], (err, result) => {
                if (err) {
                    // reject("Erro ao inserir imagem");
                    console.log(err)
                } else {
                    resolve(result);
                }
            });
        });
    });

    return Promise.all(promises);
};

// Endpoint para cadastrar a aula
app.post("/cadastrarAula", upload.array('imagens'), (req, res) => {    
    let { id_turma, data_aula, descricao, id_educador } = req.body;
    let listaAlunos = JSON.parse(req.body.listaAlunos);
    let imagens = req.files || []; // Garantir que imagens seja um array, mesmo se estiver vazio


    inserirAula(id_turma, data_aula, descricao, id_educador)
        .then(id_aula => {
            // Inserir presenças e imagens em paralelo
            return Promise.all([
                inserirPresenca(listaAlunos, id_aula),
                inserirImagens(imagens, id_aula)
            ]);
        })
        .then(() => {
            res.send("Aula, presenças e imagens inseridos com sucesso");
        })
        .catch(error => {
            console.error(error);
            res.status(500).send(error);
        });
});

app.post("/inserirFotoByIdAula", upload.single('imagem'), (req, res) => {    

    let { id_aula } = req.body;

    let imagem = req.file;

    let SQL = 'INSERT INTO fotos_aulas (id_aula, nome_arquivo, arquivo_binario) VALUES (?, ?, ?)';
   
    // Executando a consulta com parâmetros seguros
    db.query(SQL, [id_aula, imagem.originalname, imagem.buffer], (err, result) => {
        
        if (err) {
            console.log(err);
            res.status(500).send("Erro ao consultar banco de dados");
        } else {
            
            res.send(result);
            
        }
    });
});


const inserirTurma = (nome_turma, turno, projeto, id_educador) => {
    return new Promise((resolve, reject) => {
        let SQL = 'INSERT INTO turmas (nome_turma, turno, projeto, id_educador) VALUES (?, ?, ?, ?)';
        db.query(SQL, [nome_turma, turno, projeto, id_educador], (err, result) => {
            if (err) {
                reject("Erro ao inserir turma");
            } else {
                resolve(result.insertId);
            }
        });
    });
};

const inserirAlunos = (listaAlunos, id_turma) => {
    let SQLAlunos = 'INSERT INTO alunos (nome_aluno, idade, telefone, id_turma) VALUES (?, ?, ?, ?)';
    
    // Criar uma lista de Promises para as inserções dos alunos
    let promises = listaAlunos.map(aluno => {
        return new Promise((resolve, reject) => {
            db.query(SQLAlunos, [aluno.nome_aluno, aluno.idade, aluno.telefone, id_turma], (err, result) => {
                if (err) {
                    reject("Erro ao inserir aluno");
                } else {
                    resolve(result);
                }
            });
        });
    });

    // Retorna a Promise que resolve quando todas as Promises de inserção de alunos forem concluídas
    
    return Promise.all(promises);
};


app.post("/inserirTurma", (req, res) => {    
    let { nome_turma, projeto, turno, id_educador, listaAlunos } = req.body;

    inserirTurma(nome_turma, turno, projeto, id_educador)
        .then(id_turma => {
            // Inserir alunos após a turma ser inserida
            return inserirAlunos(listaAlunos, id_turma);
        })
        .then(() => {
            // Enviar a resposta quando todos os alunos forem inseridos
            res.send("Turma e alunos inseridos com sucesso");
        })
        .catch(error => {
            // Tratar erros
            console.error(error);
            res.status(500).send(error);
        });
});

const editarAula = (id_aula, data_aula, descricao, connection) => {
    return new Promise((resolve, reject) => {
        connection.query(
            'UPDATE aulas SET data_aula = ?, descricao = ? WHERE id_aula = ?',
            [data_aula, descricao, id_aula],
            (err, result) => {
                if (err) {
                    reject("Erro ao atualizar aula");
                } else {
                    resolve(result);
                }
            }
        );
    });
};

// Função para atualizar as presenças
const editarPresencas = (listaAlunos, id_aula, connection) => {
    const SQL = 'UPDATE presencas_aulas SET presente = ?, justificativa = ? WHERE id_aula = ? AND id_aluno = ?';

    // Atualizar presenças em lote
    const promises = listaAlunos.map(aluno => {
        return new Promise((resolve, reject) => {
            connection.query(SQL, [aluno.presente, aluno.justificativa, id_aula, aluno.id_aluno], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    });

    return Promise.all(promises);
};

// Função para atualizar as presenças com lógica de repetição
const editarPresencasComRetry = (listaAlunos, id_aula, connection, retries = 0) => {
    return editarPresencas(listaAlunos, id_aula, connection).catch(err => {
        if (retries < 5 && err.code === 'ER_LOCK_DEADLOCK') {
            // Espera antes de tentar novamente
            return new Promise(resolve => setTimeout(resolve, 1000))
                .then(() => editarPresencasComRetry(listaAlunos, id_aula, connection, retries + 1));
        } else {
            throw err;
        }
    });
};

app.put("/editarAulaById", (req, res) => {
    let { data_aula, descricao, id_aula, listaAlunosPresenca } = req.body;

    db.getConnection((err, connection) => {
        if (err) {
            return res.status(500).send('Erro ao obter conexão');
        }

        connection.beginTransaction(err => {
            if (err) {
                connection.release();
                return res.status(500).send('Erro ao iniciar transação');
            }

            editarAula(id_aula, data_aula, descricao, connection)
                .then(() => {
                    if (listaAlunosPresenca.length > 0) {
                        // Atualizar presenças se houver alguma alteração
                        return editarPresencasComRetry(listaAlunosPresenca, id_aula, connection);
                    }
                    return Promise.resolve(); // Se não há mudanças nas presenças, resolver imediatamente
                })
                .then(() => {
                    connection.commit(err => {
                        if (err) {
                            connection.rollback(() => {
                                connection.release();
                                res.status(500).send('Erro ao confirmar transação');
                            });
                        } else {
                            connection.release();
                            res.send("Aula Atualizada");
                        }
                    });
                })
                .catch(error => {
                    connection.rollback(() => {
                        connection.release();
                        console.error(error);
                        res.status(500).send(error.message);
                    });
                });
        });
    });
});



app.put("/editarAlunoById", (req, res) =>{

    let { nome_aluno, idade, telefone, id_aluno } = req.body;

 
    let SQL = "UPDATE alunos SET nome_aluno = ?, idade = ?, telefone = ? WHERE id_aluno = ?";

    db.query(SQL, [nome_aluno, idade, telefone, id_aluno], (err, result) =>{

        if (err) {
            console.log(err);
            res.status(500).send("Erro ao consultar banco de dados");
        } else {
            
            res.send(result);
            
        }


    })



})

app.put("/editarTurmaById", (req, res) =>{

    let { nome_turma, projeto, turno, id_turma } = req.body;

    console.log(req.body);

   
    let SQL = "UPDATE turmas SET nome_turma = ?, projeto = ?, turno = ? WHERE id_turma = ?";

    db.query(SQL, [nome_turma, projeto, turno, id_turma], (err, result) =>{

        if (err) {
            console.log(err);
            res.status(500).send("Erro ao consultar banco de dados");
        } else {
            
            res.send(result);
            
        }


    })
})



app.post("/inserirAlunoByIdTurma", (req, res) => {    

    let { nome_aluno, idade, telefone, id_turma } = req.body;

    let SQL = 'INSERT INTO alunos (nome_aluno, idade, telefone, id_turma) VALUES (?, ?, ?, ?)';
   
    // Executando a consulta com parâmetros seguros
    db.query(SQL, [nome_aluno, idade, telefone, id_turma], (err, result) => {
        
        if (err) {
            console.log(err);
            res.status(500).send("Erro ao consultar banco de dados");
        } else {
            
            res.send(result);
            
        }
    });
});





app.get("/getTurmas", (req, res) =>{

    let SQL= "SELECT * FROM turmas";

    db.query(SQL, (err, result)=>{

        if (err) {
            console.log(err);
            res.status(500).send("Erro ao consultar banco de dados");
        } else {
            
            res.send(result);
            
        }
    });

});


app.get("/getAllPresencasByIdAula", (req, res) =>{

    const { id } = req.query;

    let SQL= "SELECT * FROM presencas_aulas WHERE id_aula = ?";

    db.query(SQL, [id], (err, result) => {

        if (err) {
            console.log(err);
            res.status(500).send("Erro ao consultar banco de dados");
        } else {
            
            res.send(result);
            
        }
    });

});

app.get("/getAllPresencasByIdAluno", (req, res) =>{

    const { id } = req.query;

    let SQL= "SELECT * FROM presencas_aulas WHERE id_aluno = ?";

    db.query(SQL, [id], (err, result) => {

        if (err) {
            console.log(err);
            res.status(500).send("Erro ao consultar banco de dados");
        } else {
            
            res.send(result);
            
        }
    });

});




app.get("/getAulaByIdAula", (req, res) =>{

    const { id } = req.query;

    let SQL= "SELECT * FROM aulas WHERE id_aula = ?";

    db.query(SQL, [id], (err, result) => {

        if (err) {
            console.log(err);
            res.status(500).send("Erro ao consultar banco de dados");
        } else {
            
            res.send(result);
            
        }
    });

});


app.get("/getAllFotosByIdAula", (req, res) =>{

    const { id } = req.query;

    let SQL= "SELECT * FROM fotos_aulas WHERE id_aula = ?";

    db.query(SQL, [id], (err, result) => {

        if (err) {
            console.log(err);
            res.status(500).send("Erro ao consultar banco de dados");
        } else {
            
            res.send(result);
            
        }
    });

});

app.get("/getPresencasEDetalhesByIdAluno", (req, res) => {
    const { id } = req.query;
  
    // Consulta para obter todas as presenças do aluno
    let SQLPresencas = "SELECT * FROM presencas_aulas WHERE id_aluno = ?";
    
    db.query(SQLPresencas, [id], (errPresencas, resultPresencas) => {
      if (errPresencas) {
        console.log(errPresencas);
        return res.status(500).send("Erro ao consultar presenças no banco de dados");
      }
  
      // Se não há presenças, retornar imediatamente
      if (resultPresencas.length === 0) {
        return res.send([]);
      }
  
      // Consultar os detalhes das aulas associadas às presenças
      const idsAulas = resultPresencas.map(p => p.id_aula);
      let SQLAulas = "SELECT * FROM aulas WHERE id_aula IN (?)";
  
      db.query(SQLAulas, [idsAulas], (errAulas, resultAulas) => {
        if (errAulas) {
          console.log(errAulas);
          return res.status(500).send("Erro ao consultar detalhes das aulas no banco de dados");
        }
  
        // Criar um mapa para acessar os detalhes das aulas rapidamente
        const mapaAulas = resultAulas.reduce((acc, aula) => {
          acc[aula.id_aula] = aula;
          return acc;
        }, {});
  
        // Associar detalhes das aulas às presenças
        const presencasComDetalhes = resultPresencas.map(presenca => ({
          ...presenca,
          aula_detalhe: mapaAulas[presenca.id_aula] || null
        }));
  
        res.send(presencasComDetalhes);
      });
    });
});
  


app.get("/getAllTurmasByIdEducador", (req, res) =>{

    const { id } = req.query;


    let SQL= "SELECT * FROM turmas WHERE id_educador = ?";

    db.query(SQL, [id], (err, result) => {

        if (err) {
            console.log(err);
            res.status(500).send("Erro ao consultar banco de dados");
        } else {
            
            res.send(result);
            
        }
    });

});

app.get("/getAllAlunosByIdTurma", (req, res) =>{

    const { id } = req.query;


    let SQL= "SELECT * FROM alunos WHERE id_turma = ?";

    db.query(SQL, [id], (err, result) => {

        if (err) {
            console.log(err);
            res.status(500).send("Erro ao consultar banco de dados");
        } else {
            
            res.send(result);
            
        }
    });

});


app.get("/getFrequenciaByAlunoId", (req, res) =>{

    const { id } = req.query;


    let SQL= "SELECT * FROM presencas_aulas WHERE id_aluno = ?";

    db.query(SQL, [id], (err, result) => {

        if (err) {
            console.log(err);
            res.status(500).send("Erro ao consultar banco de dados");
        } else {
            
            res.send(result);
            
        }
    });

});

app.get("/getAllAulasByIdEducador", (req, res) =>{

    const { id } = req.query;

    let SQL = "SELECT * FROM aulas WHERE id_educador = ? ORDER BY id_aula DESC"

    // let SQL= "SELECT * FROM aulas WHERE id_educador = ?";

    db.query(SQL, [id], (err, result) => {

        if (err) {
            console.log(err);
            res.status(500).send("Erro ao consultar banco de dados");
        } else {
            
            res.send(result);
            
        }
    });

});

// app.get("/getAlunosByIdTurma", (req, res) =>{

//     const { id } = req.query;


//     let SQL= "SELECT * FROM alunos WHERE id_turma = ?";

//     db.query(SQL, [id], (err, result) => {

//         if (err) {
//             console.log(err);
//             res.status(500).send("Erro ao consultar banco de dados");
//         } else {
            
//             res.send(result);
            
//         }
//     });

// });

app.get("/getTurmaByIdEducador", (req, res) =>{

    const { id_educador, id_turma } = req.query;


    let SQL= "SELECT * FROM turmas WHERE id_educador = ? AND id_turma = ?";

    db.query(SQL, [id_educador, id_turma], (err, result) => {

        if (err) {
            console.log(err);
            res.status(500).send("Erro ao consultar banco de dados");
        } else {
            
            res.send(result);
            
        }
    });

});










// Supondo que você tenha um pool de conexões ou objeto de conexão definido como 'db'



// app.get("/", (req, res)=>{

//     let SQL = 'insert into games (nome, preco, categoria) values ("God of War", "120", "Romantico")';

//     db.query(SQL, (err, result)=>{
//         console.log(err)
//     })



// })


// ALTERAÇÕES DAS TELAS DE COORD.




app.get("/getAllAulasByIdTurma", (req, res) =>{

    const { id } = req.query;

    let SQL = "SELECT * FROM aulas WHERE id_turma = ? ORDER BY id_aula DESC"

    // let SQL= "SELECT * FROM aulas WHERE id_educador = ?";

    db.query(SQL, [id], (err, result) => {

        if (err) {
            console.log(err);
            res.status(500).send("Erro ao consultar banco de dados");
        } else {
            
            res.send(result);
            
        }
    });

});


app.get("/getAllTurmas", (req, res) =>{

    let SQL= "SELECT * FROM turmas WHERE id_educador > 1 ORDER BY id_educador";

    db.query(SQL, (err, result) => {

        if (err) {
            console.log(err);
            res.status(500).send("Erro ao consultar banco de dados");
        } else {
            
            res.send(result);
            
        }
    });

});


app.get("/getAllEducadores", (req, res) =>{

    //SE LIGA NO QUE FICA AQUI

    
    let SQL = "SELECT * FROM educadores"

    db.query(SQL, (err, result) => {

        if (err) {
            console.log(err);
            res.status(500).send("Erro ao consultar banco de dados");
        } else {
            
            res.send(result);
            
        }
    });

});



app.listen(3002, ()=>{
    console.log("rodando servidor");
});

