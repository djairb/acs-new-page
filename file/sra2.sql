CREATE DATABASE sra2;
USE sra2;

-- Tabela de educadores

CREATE TABLE coordenadores (
  id_coordenador INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  foto_url VARCHAR(255) NOT NULL,
  usuario VARCHAR(255) NOT NULL,
  senha VARCHAR(255) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE educadores (
  id_educador INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  foto_url VARCHAR(255) NOT NULL,
  usuario VARCHAR(255) NOT NULL,
  senha VARCHAR(255) NOT NULL -- recebe o hash já processado
) ENGINE = InnoDB;

-- Tabela de turmas
CREATE TABLE turmas (
  id_turma INT PRIMARY KEY AUTO_INCREMENT,
  nome_turma VARCHAR(255) NOT NULL,
  turno ENUM('Manhã', 'Tarde', 'Noite') NOT NULL,
  projeto ENUM('Conecta Vidas','Passaporte Digital', 'Centro Formação', 'Oportunizar Urbano', 'Oportunizar Rural', 'VamoSimbora?', 'Skate Livre', 'Inovação e Tecnologia com Elas') NOT NULL,
  id_educador INT NOT NULL,
  status ENUM('ativa', 'arquivada') DEFAULT 'ativa',
  FOREIGN KEY (id_educador) REFERENCES educadores(id_educador) ON DELETE CASCADE
) ENGINE = InnoDB;

-- Tabela de alunos
CREATE TABLE alunos (
  id_aluno INT PRIMARY KEY AUTO_INCREMENT,
  nome_aluno VARCHAR(255) NOT NULL,
  idade VARCHAR(255),
  telefone VARCHAR(20),
  foto_perfil BLOB,
  status ENUM('ativo', 'desligado', 'pendente') DEFAULT 'ativo'
) ENGINE = InnoDB;

-- Tabela de matrículas (histórico do aluno em turmas)
CREATE TABLE matriculas (
  id_matricula INT PRIMARY KEY AUTO_INCREMENT,
  id_aluno INT NOT NULL,
  id_turma INT NOT NULL,
  data_entrada DATE NOT NULL,
  data_saida DATE,
  motivo_saida VARCHAR(255),
  FOREIGN KEY (id_aluno) REFERENCES alunos(id_aluno) ON DELETE CASCADE,
  FOREIGN KEY (id_turma) REFERENCES turmas(id_turma) ON DELETE CASCADE
) ENGINE = InnoDB;

-- Tabela de aulas
CREATE TABLE aulas (
  id_aula INT PRIMARY KEY AUTO_INCREMENT,
  id_educador INT NOT NULL,
  id_turma INT NOT NULL,
  data_aula DATE NOT NULL,
  descricao TEXT NOT NULL,
  FOREIGN KEY (id_educador) REFERENCES educadores(id_educador),
  FOREIGN KEY (id_turma) REFERENCES turmas(id_turma) ON DELETE CASCADE
) ENGINE = InnoDB;

-- Tabela de fotos das aulas
CREATE TABLE fotos_aulas (
  id_foto_aula INT PRIMARY KEY AUTO_INCREMENT,
  id_aula INT NOT NULL,
  nome_arquivo VARCHAR(255) NOT NULL,
  foto_url VARCHAR(255) NOT NULL,
  FOREIGN KEY (id_aula) REFERENCES aulas(id_aula) ON DELETE CASCADE
) ENGINE = InnoDB;

-- Tabela de presenças dos alunos nas aulas
CREATE TABLE presencas_aulas (
  id_presenca_aula INT PRIMARY KEY AUTO_INCREMENT,
  id_aula INT NOT NULL,
  id_aluno INT NOT NULL,
  presente ENUM('presente', 'ausente', 'justificada', 'desligado') DEFAULT 'presente',
  justificativa VARCHAR(255),
  FOREIGN KEY (id_aula) REFERENCES aulas(id_aula) ON DELETE CASCADE,
  FOREIGN KEY (id_aluno) REFERENCES alunos(id_aluno) ON DELETE CASCADE
) ENGINE = InnoDB;
