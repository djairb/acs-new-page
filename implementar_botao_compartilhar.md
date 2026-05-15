# Prompt: Implementar Botão de Compartilhar nas Páginas de Notícia

## Contexto do Projeto

Projeto React SPA (Create React App) com HashRouter.  
O site principal está em: `https://somosconexaosocial.org`  
O servidor de notícias (Express/Node.js) está em: `https://noticia.somosconexaosocial.org`

---

## Arquivo principal a modificar

```
client/src/paginas/VisualizarNoticia/index.jsx
```

Este componente já existe e carrega a notícia pelo `slug` da URL.  
Os dados da notícia ficam no estado `noticiaCarregada` com os seguintes campos disponíveis:

```js
noticiaCarregada.titulo       // string - título da notícia
noticiaCarregada.descricao    // string - HTML do corpo da notícia
noticiaCarregada.foto_capa    // string - caminho da imagem, ex: "/uploads/abc.jpg"
noticiaCarregada.slug         // string - slug da notícia
noticiaCarregada.nome_autor   // string - nome do autor
noticiaCarregada.data_noticia // string - data ISO
```

A URL pública de uma notícia segue o formato:
```
https://somosconexaosocial.org/noticias/{slug}
```

---

## O que deve ser implementado

### Botão de compartilhamento nativo (Web Share API)

Implementar um botão "Compartilhar" que:

1. **Em dispositivos móveis**: usa a **Web Share API** (`navigator.share`), que abre a gaveta nativa do sistema operacional com WhatsApp, Instagram, Telegram, etc.
2. **Em desktop** (fallback): exibe um pequeno menu/dropdown com botões diretos para:
   - WhatsApp Web
   - Telegram
   - Copiar link (com feedback visual "Copiado!")

### URL a ser compartilhada
```
https://somosconexaosocial.org/noticias/{noticiaCarregada.slug}
```

### Texto a ser compartilhado
```
{noticiaCarregada.titulo} — Leia em: https://somosconexaosocial.org/noticias/{slug}
```

---

## Implementação sugerida

### Lógica do botão (dentro do componente `Noticia`)

```jsx
const handleCompartilhar = async () => {
  const url = `https://somosconexaosocial.org/noticias/${noticiaCarregada.slug}`;
  const texto = `${noticiaCarregada.titulo} — Leia em: ${url}`;

  if (navigator.share) {
    // Mobile: abre o menu nativo (WhatsApp, Telegram, etc.)
    try {
      await navigator.share({ title: noticiaCarregada.titulo, text: texto, url });
    } catch (err) {
      // usuário cancelou, ignora
    }
  } else {
    // Desktop: fallback — exibe dropdown ou abre WhatsApp Web
    setMostrarOpcoes(prev => !prev);
  }
};

const handleCopiarLink = () => {
  const url = `https://somosconexaosocial.org/noticias/${noticiaCarregada.slug}`;
  navigator.clipboard.writeText(url).then(() => {
    setLinkCopiado(true);
    setTimeout(() => setLinkCopiado(false), 2500);
  });
};
```

### Estados adicionais necessários
```jsx
const [mostrarOpcoes, setMostrarOpcoes] = useState(false);
const [linkCopiado, setLinkCopiado] = useState(false);
```

### Links dos botões de fallback (desktop)
```jsx
// WhatsApp Web
const urlWhatsapp = `https://api.whatsapp.com/send?text=${encodeURIComponent(texto)}`;

// Telegram
const urlTelegram = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(noticiaCarregada.titulo)}`;
```

---

## Onde colocar o botão no JSX

Dentro do bloco `{noticiaCarregada ? ( ... )}`, logo abaixo do cabeçalho da notícia (após o `<div className='noticiaHeader'>`):

```jsx
{/* Botão Compartilhar */}
<div className="compartilharWrapper">
  <button className="btnCompartilhar" onClick={handleCompartilhar}>
    🔗 Compartilhar
  </button>

  {/* Dropdown de fallback — só aparece em desktop quando navigator.share não existe */}
  {mostrarOpcoes && (
    <div className="compartilharDropdown">
      <a href={urlWhatsapp} target="_blank" rel="noreferrer" className="compartilharOpcao">
        WhatsApp
      </a>
      <a href={urlTelegram} target="_blank" rel="noreferrer" className="compartilharOpcao">
        Telegram
      </a>
      <button className="compartilharOpcao" onClick={handleCopiarLink}>
        {linkCopiado ? 'Copiado!' : 'Copiar link'}
      </button>
    </div>
  )}
</div>
```

---

## Estilos CSS a adicionar

Adicionar no arquivo de estilos do projeto (`client/src/style/style.css` ou equivalente):

```css
.compartilharWrapper {
  position: relative;
  display: inline-block;
  margin: 1rem 0;
}

.btnCompartilhar {
  background: linear-gradient(135deg, #25D366, #128C7E);
  color: white;
  border: none;
  padding: 0.6rem 1.4rem;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: opacity 0.2s;
}

.btnCompartilhar:hover {
  opacity: 0.88;
}

.compartilharDropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 100;
  min-width: 180px;
  animation: fadeInDown 0.15s ease;
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
}

.compartilharOpcao {
  padding: 0.75rem 1.2rem;
  font-size: 0.9rem;
  color: #333;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background 0.15s;
}

.compartilharOpcao:hover {
  background: #f5f5f5;
}
```

---

## Notas importantes

- O arquivo de componente fica em: `client/src/paginas/VisualizarNoticia/index.jsx`
- O arquivo de estilos global fica em: `client/src/style/style.css`
- NÃO usar Tailwind — o projeto usa Vanilla CSS
- O projeto usa React funcional com hooks (`useState`, `useEffect`)
- Não alterar a lógica de carregamento da notícia nem a seção de comentários que já existe
- A API de notícias já está funcionando em `https://noticia.somosconexaosocial.org`
- O slug da notícia vem do `useParams()` já implementado no componente
