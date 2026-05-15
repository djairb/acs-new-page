# 📡 Integração com a API de Notícias — ACS

> **Base URL:** `https://noticia.somosconexaosocial.org/backnoticia`  
> **Base de imagens:** `https://somosconexaosocial.org`  
> Todos os endpoints marcados como **público** não precisam de token.

---

## 1. Listar Notícias

### Todas as notícias (paginado)
```
GET /getAllNoticiasACS2?page=1&limit=12
```

**Resposta:**
```json
[
  {
    "id_noticia": 42,
    "titulo": "Título da Notícia",
    "slug": "titulo-da-noticia",
    "data_noticia": "2026-05-10T00:00:00.000Z",
    "exibir_na_home": 1,
    "nome_autor": "Maria Silva",
    "foto_capa": "/uploads/abc123.jpg"
  }
]
```

> 🖼️ URL completa da imagem: `https://somosconexaosocial.org` + `foto_capa`  
> Exemplo: `https://somosconexaosocial.org/uploads/abc123.jpg`

---

### Notícias em destaque (home)
```
GET /getNoticiasHomeGeral
```
Retorna apenas as notícias com `exibir_na_home = true`.  
Mesma estrutura de resposta acima.

---

### Notícias do blog
```
GET /getAllNoticiasRebeca
```
Retorna notícias com `ir_para_blog = 1`.

---

### Notícias institucionais
```
GET /getAllNoticiasACS
```
Retorna notícias com `ir_para_blog = 0`.

---

## 2. Buscar uma Notícia pelo Slug

```
GET /getNoticiaGeralBySlug?slug=titulo-da-noticia
```

**Resposta:** array com um objeto contendo **todos os campos** da notícia:
```json
[
  {
    "id_noticia": 42,
    "titulo": "Título da Notícia",
    "slug": "titulo-da-noticia",
    "descricao": "<p>Conteúdo HTML da notícia...</p>",
    "data_noticia": "2026-05-10T00:00:00.000Z",
    "nome_autor": "Maria Silva",
    "foto_capa": "/uploads/abc123.jpg",
    "exibir_na_home": 1,
    "ir_para_blog": 0,
    "id_usuario": 3
  }
]
```

> ⚠️ Retorna um **array** — use `response.data[0]` para pegar o objeto.  
> O campo `descricao` contém **HTML** — renderize com `dangerouslySetInnerHTML` (React) ou `innerHTML`.

---

## 3. Fotos adicionais de uma Notícia

```
GET /getAllFotosByIdNoticiaGeral?id=42
```

**Resposta:**
```json
[
  { "id_foto": 10, "id_noticia": 42, "foto": "/uploads/def456.jpg" },
  { "id_foto": 11, "id_noticia": 42, "foto": "/uploads/ghi789.jpg" }
]
```

> 🖼️ URL completa: `https://somosconexaosocial.org` + `foto`

---

## 4. Comentários

### 4.1 Buscar comentários de uma notícia
```
GET /getComentariosByIdNoticia?id=42
```

**Resposta:**
```json
[
  {
    "id_comentario": 7,
    "nome_autor": "João",
    "texto": "Excelente notícia!",
    "data_comentario": "2026-05-14T14:22:00.000Z"
  }
]
```

> Os comentários vêm ordenados do mais recente para o mais antigo.

---

### 4.2 Enviar um novo comentário
```
POST /inserirComentario
Content-Type: application/json
```

**Body:**
```json
{
  "id_noticia": 42,
  "nome_autor": "João da Silva",
  "texto": "Muito bom esse conteúdo!"
}
```

**Resposta de sucesso:**
```json
{ "success": true, "id_comentario": 8 }
```

**Regras:**
- `nome_autor`: máx. 100 caracteres
- `texto`: máx. 2000 caracteres
- Todos os campos são obrigatórios
- **Sem autenticação** — qualquer usuário pode comentar

---

## 5. Preview para WhatsApp (Open Graph)

Para gerar um link com preview rico no WhatsApp, Telegram e redes sociais, use:

```
GET /og/:slug
```

**Exemplo:**
```
https://noticia.somosconexaosocial.org/backnoticia/og/titulo-da-noticia
```

Esse endpoint retorna uma página HTML com as `<meta>` tags corretas e redireciona automaticamente o usuário para a notícia real. O WhatsApp lê as meta tags e exibe título + imagem + descrição.

> 📣 **Ao compartilhar uma notícia**, use este link em vez do link direto do React.

---

## 6. Exemplos de Código

### React — Carregar notícia e comentários por slug

```jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

const BASE = 'https://noticia.somosconexaosocial.org/backnoticia';
const IMG  = 'https://somosconexaosocial.org';

function PaginaNoticia({ slug }) {
  const [noticia, setNoticia] = useState(null);
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    // Carrega a notícia
    axios.get(`${BASE}/getNoticiaGeralBySlug`, { params: { slug } })
      .then(res => setNoticia(res.data[0]));

    // Carrega comentários
    axios.get(`${BASE}/getComentariosByIdNoticia`, { params: { id: slug } })
      .then(res => setComentarios(res.data));
  }, [slug]);

  if (!noticia) return <p>Carregando...</p>;

  return (
    <article>
      <img src={`${IMG}${noticia.foto_capa}`} alt={noticia.titulo} />
      <h1>{noticia.titulo}</h1>
      <p>Por {noticia.nome_autor}</p>
      <div dangerouslySetInnerHTML={{ __html: noticia.descricao }} />

      <section>
        <h2>Comentários ({comentarios.length})</h2>
        {comentarios.map(c => (
          <div key={c.id_comentario}>
            <strong>{c.nome_autor}</strong>
            <p>{c.texto}</p>
          </div>
        ))}
      </section>
    </article>
  );
}
```

---

### React — Enviar comentário

```jsx
async function enviarComentario(id_noticia, nome_autor, texto) {
  const BASE = 'https://noticia.somosconexaosocial.org/backnoticia';

  try {
    const res = await axios.post(`${BASE}/inserirComentario`, {
      id_noticia,
      nome_autor,
      texto
    });
    console.log('Comentário enviado, id:', res.data.id_comentario);
  } catch (err) {
    console.error('Erro ao enviar comentário:', err.response?.data);
  }
}
```

---

### Fetch puro — Carregar lista de notícias

```js
const BASE = 'https://noticia.somosconexaosocial.org/backnoticia';

fetch(`${BASE}/getAllNoticiasACS2?page=1&limit=12`)
  .then(res => res.json())
  .then(noticias => {
    noticias.forEach(n => {
      console.log(n.titulo, n.slug);
      // Imagem: 'https://somosconexaosocial.org' + n.foto_capa
    });
  });
```

---

## 7. Tabela Resumo dos Endpoints Públicos

| Endpoint | Método | Params | Descrição |
|---|---|---|---|
| `/getAllNoticiasACS2` | GET | `page`, `limit` | Lista paginada de todas as notícias |
| `/getNoticiasHomeGeral` | GET | — | Notícias em destaque |
| `/getAllNoticiasRebeca` | GET | — | Notícias do blog |
| `/getAllNoticiasACS` | GET | — | Notícias institucionais |
| `/getNoticiaGeralBySlug` | GET | `slug` | Dados completos de uma notícia |
| `/getAllFotosByIdNoticiaGeral` | GET | `id` | Fotos adicionais de uma notícia |
| `/getComentariosByIdNoticia` | GET | `id` | Comentários de uma notícia |
| `/inserirComentario` | POST | body JSON | Postar novo comentário |
| `/og/:slug` | GET | — | HTML Open Graph para WhatsApp |
| `/getVejaMaisNoticia` | GET | `id` | Sugestão de outra notícia aleatória |
