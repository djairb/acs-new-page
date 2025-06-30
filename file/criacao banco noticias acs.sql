CREATE DATABASE acsNoticia;

USE acsNoticia;

-- ULTIMA ATUALIZAÇÃO - 07.03.2025

-- Criar tabela de usuários
CREATE TABLE usuarios (
  id_usuario INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  usuario VARCHAR(255) NOT NULL,
  senha VARCHAR(255) NOT NULL,
  tipo_usuario ENUM('estagiario', 'profissional') NOT NULL
) ENGINE = InnoDB;

-- Criar tabela de notícias
CREATE TABLE noticias (
    id_noticia INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    data_noticia DATE NOT NULL,
    descricao MEDIUMTEXT NOT NULL,
    exibir_na_home BOOLEAN DEFAULT FALSE,
    id_usuario INT NOT NULL,
    nome_autor VARCHAR(255) NOT NULL,
    foto_capa VARCHAR(255) NOT NULL, -- Agora armazenamos o nome do arquivo da imagem
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
) ENGINE = InnoDB;

-- Criar tabela para fotos adicionais associadas às notícias
CREATE TABLE fotos_noticia (
    id_foto INT PRIMARY KEY AUTO_INCREMENT,
    id_noticia INT NOT NULL,
    foto VARCHAR(255) NOT NULL, -- Agora armazenamos o nome do arquivo da imagem
    FOREIGN KEY (id_noticia) REFERENCES noticias(id_noticia) ON DELETE CASCADE
) ENGINE = InnoDB;
