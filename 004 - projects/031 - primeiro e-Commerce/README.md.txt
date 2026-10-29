# Minimal Store — E-commerce em JavaScript, HTML e CSS

Loja de roupas minimalista, totalmente responsiva, desenvolvida com **JavaScript puro (vanilla), HTML5 e CSS3** — sem framework, sem build, sem dependências.

## Como executar

### Opção 1: Abrir direto no navegador
Basta dar dois cliques em `index.html` — pronto!

### Opção 2: Rodar com servidor local (recomendado)
Evita problemas de CORS em alguns navegadores:

```bash
# Python 3
cd ecommerce
python3 -m http.server 8000

# Node.js
npx serve ecommerce
```
Depois acesse: http://localhost:8000

## Estrutura do projeto

```
ecommerce/
├── index.html          # Página inicial (vitrine)
├── produto.html       # Detalhes do produto (?id=1)
├── carrinho.html      # Carrinho de compras
├── checkout.html      # Finalização (dados + pagamento simulado)
├── confirmacao.html   # Confirmação do pedido
├── css/
│   └── style.css       # Estilos globais + responsividade
├── js/
│   ├── data.js         # Base de produtos (8 peças)
│   ├── cart.js         # Lógica do carrinho (localStorage)
│   ├── ui.js           # Renderização dinâmica (DOM)
│   └── main.js         # Inicialização e eventos por página
└── assets/             # Pasta reservada para imagens próprias
```

## Funcionalidades implementadas

### Catálogo
- 8 produtos de moda (camisetas, calças, tênis, casacos)
- Imagens profissionais via Unsplash
- Filtros por categoria (Todos, Camisetas, Calças, Tênis, Casacos)
- Busca por nome (com debounce de 300ms)
- Ordenação (relevância, menor preço, maior preço, A-Z)

### Produto
- Página de detalhes com URL parametrizada (?id=N)
- Seleção de cor e tamanho (chips clicáveis)
- Seletor de quantidade (+/−)
- Descrição detalhada, categoria e preço

### Carrinho
- Persistência em `localStorage` (sobrevive a refresh/fechamento)
- Adicionar, remover, alterar quantidade
- Cálculo automático de subtotal, frete e total
- **Frete grátis acima de R$ 299** (senão R$ 25)
- Notificação flutuante ao adicionar item
- Badge com contador no header

### Checkout
- Formulário completo com validação HTML5
- Dados pessoais (nome, email, CPF, telefone)
- Endereço com todos os estados brasileiros
- 3 métodos de pagamento simulados (Cartão, Pix, Boleto)
- Resumo lateral do pedido
- Tela de confirmação com número de pedido aleatório

### Design
- Estilo minimalista inspirado na Apple
- Tipografia Inter (Google Fonts)
- Mobile-first totalmente responsivo
- Menu hambúrguer em telas pequenas
- Animações suaves e transições
- Acessibilidade: foco visível, aria-labels, prefers-reduced-motion

## Como personalizar

### Adicionar um produto
Edite `js/data.js` e adicione um objeto ao array `PRODUTOS`:

```js
{
  id: 9,                                  // ID único
  nome: "Camiseta Polo",
  categoria: "camisetas",                  // ou calcas, tenis, casacos
  preco: 159.90,
  descricao: "Descrição do produto...",
  imagem: "https://...",
  cores: ["Azul", "Branco"],
  tamanhos: ["P", "M", "G"],
  destaque: false
}
```

### Mudar cores do tema
Edite as variáveis CSS no topo de `css/style.css`:

```css
:root {
  --color-bg: #ffffff;
  --color-text: #1d1d1f;
  --color-accent: #1d1d1f;   /* troque por sua marca */
}
```

### Mudar regras de frete
Edite a função `calcularFrete()` em `js/cart.js`:

```js
function calcularFrete() {
  const subtotal = calcularSubtotal();
  return subtotal >= 299 ? 0 : 25.00;  // ajuste aqui
}
```

### Trocar imagens
Substitua as URLs em `imagem` (Unsplash) por suas próprias imagens em `assets/imagens/` e referencie como `assets/imagens/minha-imagem.jpg`.

## Tecnologias usadas

| Tecnologia | Versão/Recurso |
|------------|----------------|
| HTML5 | Semântica, forms com validação nativa |
| CSS3 | Grid, Flexbox, variáveis, media queries |
| JavaScript | ES6+ (let, const, arrow functions, template literals) |
| Web APIs | localStorage, URLSearchParams, DOM API |
| Fontes | Google Fonts (Inter) |

## Próximos passos (ideias para evoluir)

- [ ] Backend real (Node + Express + MongoDB)
- [ ] Autenticação de usuários (login/registro)
- [ ] Integração real de pagamento (Stripe, Mercado Pago)
- [ ] Painel admin para gerenciar produtos
- [ ] Lista de desejos (favoritos)
- [ ] Avaliações e comentários
- [ ] Paginação e filtros avançados (preço, tamanho, cor)
- [ ] Integração com API de CEP (ViaCEP)

---

Desenvolvido com foco educacional — sem dependências externas, pronto para estudo e modificação.
