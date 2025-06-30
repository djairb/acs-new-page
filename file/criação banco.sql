CREATE DATABASE bancoTCC;

USE bancoTCC;

-- ULTIMA ATUALIZAÇÃO - 04.06.2025 - adição do 

-- Criar tabela educadores
CREATE TABLE educadores (
  id_educador INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  foto_perfil BLOB,
  usuario VARCHAR(255) NOT NULL,
  senha VARCHAR(255) NOT NULL
) ENGINE = InnoDB;

-- Criar tabela coordenadores - verificar innoDB no banco local
CREATE TABLE coordenadores (
  id_coordenador INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  foto_perfil BLOB,
  usuario VARCHAR(255) NOT NULL,
  senha VARCHAR(255) NOT NULL
) ENGINE = InnoDB;

-- Criar tabela turmas
CREATE TABLE turmas (
    id_turma INT PRIMARY KEY AUTO_INCREMENT,
    nome_turma VARCHAR(255) NOT NULL,
    turno ENUM('Manhã', 'Tarde', 'Noite') NOT NULL,
    projeto ENUM('Conecta Vidas','Passaporte Digital', 'Centro Formação', 'Oportunizar Urbano', 'Oportunizar Rural', 'VamoSimbora?', 'Skate Livre', 'Inovação e Tecnologia com Elas') NOT NULL,
    id_educador INT NOT NULL,
    status ENUM('ativa', 'arquivada') NOT NULL DEFAULT 'ativa',
    FOREIGN KEY (id_educador) REFERENCES educadores(id_educador) ON DELETE CASCADE
) ENGINE = InnoDB;

-- Criar tabela alunos
CREATE TABLE alunos (
    id_aluno INT PRIMARY KEY AUTO_INCREMENT,
    nome_aluno VARCHAR(255) NOT NULL,
    idade VARCHAR(255) NOT NULL,
    telefone VARCHAR(20),
    id_turma INT NOT NULL,
    foto_perfil BLOB,
    status ENUM('ativo', 'desligado') NOT NULL DEFAULT 'ativo',
    FOREIGN KEY (id_turma) REFERENCES turmas(id_turma) ON DELETE CASCADE
) ENGINE = InnoDB;

-- Criar tabela aulas
CREATE TABLE aulas (
    id_aula INT PRIMARY KEY AUTO_INCREMENT,
    id_educador INT NOT NULL,
    id_turma INT NOT NULL,
    data_aula DATE NOT NULL,
    descricao TEXT NOT NULL,
    FOREIGN KEY (id_educador) REFERENCES educadores(id_educador),
    FOREIGN KEY (id_turma) REFERENCES turmas(id_turma) ON DELETE CASCADE
) ENGINE = InnoDB;

-- Criar tabela fotos_aulas
CREATE TABLE fotos_aulas (
    id_foto_aula INT PRIMARY KEY AUTO_INCREMENT,
    id_aula INT NOT NULL,
    nome_arquivo VARCHAR(255) NOT NULL,
    arquivo_binario LONGBLOB NOT NULL,
    FOREIGN KEY (id_aula) REFERENCES aulas(id_aula) ON DELETE CASCADE
) ENGINE = InnoDB;

-- Criar tabela presencas_aulas
CREATE TABLE presencas_aulas (
    id_presenca_aula INT PRIMARY KEY AUTO_INCREMENT,
    id_aula INT NOT NULL,
    id_aluno INT NOT NULL,
    presente ENUM('presente', 'ausente', 'justificada', 'desligado') NOT NULL DEFAULT 'presente',
    justificativa VARCHAR(255) NULL,
    FOREIGN KEY (id_aula) REFERENCES aulas(id_aula) ON DELETE CASCADE,
    FOREIGN KEY (id_aluno) REFERENCES alunos(id_aluno) ON DELETE CASCADE
) ENGINE = InnoDB;
