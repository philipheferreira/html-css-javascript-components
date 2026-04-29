
# 👥 Gerenciador de Pessoas

Uma aplicação web simples e eficiente para cadastro e gerenciamento de pessoas, desenvolvida para demonstrar operações de CRUD (Create, Read, Update, Delete) utilizando tecnologias web nativas, sem dependência de frameworks complexos.

O sistema permite adicionar novos usuários, visualizar a lista em uma tabela, editar registros existentes e excluir entradas, tudo com uma interface responsiva e feedback visual claro.


## 🚀 Funcionalidades

O projeto oferece um ciclo completo de gerenciamento de dados:

- ✅ Adicionar Pessoa: Cadastro de novos usuários através de um formulário validado.
- 📋 Listagem Visual: Tabela organizada exibindo Nome, Idade e Cargo.
- ✏️ Edição Dinâmica: Capacidade de editar linhas existentes. Ao clicar em editar:
Os dados são carregados de volta no formulário;
A linha selecionada é destacada visualmente;
O botão de ação muda para "Salvar Alterações";
- ❌ Exclusão: Remoção de registros com um clique, incluindo verificação de integridade ao editar.
- 🧹 Cancelamento de Edição: Botão dedicado para abortar a operação de edição e limpar o formulário.
- 📱 Design Responsivo: Layout que se adapta a diferentes tamanhos de tela usando Flexbox.
- 💾 Dados Iniciais: Carregamento automático de dados de exemplo ao iniciar a página.


## 🛠️ Tecnologias Utilizadas


Este projeto foi desenvolvido utilizando apenas tecnologias essenciais da Web (Vanilla JS):

- **HTML5**: Estrutura semântica e acessível do documento.
- **CSS3**: Estilização moderna, variáveis CSS, Flexbox para layout e estados de hover.
- **JavaScript (ES6+)**:
Manipulação do DOM.
- Event Listeners para interatividade.
- Lógica condicional para alternar entre modos de "Criação" e "Edição".
- Templates Literals para geração de HTML dinâmico.
## 📦 Como Executar

Como este projeto é puramente Frontend, não requer instalação de servidores ou dependências (Node.js, NPM, etc).

Clone este repositório para sua máquina local:
git clone https://github.com/seu-usuario/gerenciador-pessoas.git
Navegue até a pasta do projeto:
cd gerenciador-pessoas
Abra o arquivo index.html diretamente no seu navegador favorito (Chrome, Firefox, Edge, etc).
    
## 🎮 Como Utilizar
### 1. Cadastrar uma Pessoa
- Preencha os campos Nome Completo, Idade e Cargo.
- Clique no botão "Adicionar pessoa" (Azul).
- A nova linha aparecerá instantaneamente na tabela abaixo.

### 2. Editar uma Pessoa
- Encontre a pessoa desejada na lista.
- Clique no botão "Editar" (Verde).
- O formulário será preenchido automaticamente com os dados dessa pessoa, e a linha ficará destacada em amarelo.
- Altere os dados desejados e clique em "Salvar Alterações" (Laranja).

### 3. Cancelar Edição
- Se você iniciou uma edição mas desistiu, clique no botão "Cancelar" (Cinza) que aparecerá ao lado do botão principal.

- O formulário será limpo e o sistema voltará ao modo de adição.
### 4. Excluir uma Pessoa
- Clique no botão "Excluir" (Vermelho) na linha correspondente.

- O registro será removido da tabela. Se a tabela ficar vazia, uma mensagem informativa aparecerá.
## 📂 Estrutura do Projeto

A organização dos arquivos segue o padrão clássico de desenvolvimento web, separando estrutura, estilo e comportamento.

gerenciador-pessoas/│

├── index.html       # Estrutura HTML da aplicação e elementos do DOM.

├── style.css        # Estilos visuais, layout e responsividade.

├── script.js        # Lógica de negócios, manipulação da tabela e eventos.

└── README.md        # Documentação do projeto.