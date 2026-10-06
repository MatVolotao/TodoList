# Todo List App

![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)

Aplicação Front-End desenvolvida em React 19 e TypeScript para gerenciamento prático e eficiente de tarefas cotidianas. O projeto conta com controle de estados por meio de Custom Hooks, alternância dinâmica entre tema claro e escuro via Context API e estilização moderna com Tailwind CSS v4.

---

## 📷 Preview

### Tema Escuro (Padrão)
![Tema Escuro](./public/images/bg-desktop-dark.jpg)

### Tema Claro
![Tema Claro](./public/images/bg-desktop-light.jpg)

> 💡 *Dica: Substitua as imagens acima por capturas de tela da aplicação em execução no seu ambiente.*

---

## 📌 Sobre o Projeto

O **Todo List App** foi desenvolvido com o propósito de consolidar conceitos fundamentais do ecossistema React moderno e TypeScript, focando em boas práticas de componentização, controle de fluxo e arquitetura limpa.

A aplicação resolve a necessidade de organização diária de atividades, oferecendo uma experiência interativa e fluida:
- Criação rápida de novas tarefas via formulário;
- Marcação de status de conclusão com feedback visual instantâneo (tachado e gradiente no marcador);
- Filtragem dinâmica das tarefas por status (*Todas*, *Ativas* e *Concluídas*);
- Exclusão individual de tarefas e remoção em lote de tarefas concluídas;
- Alternância completa de tema (*Dark / Light Mode*) com persistência visual e design responsivo (Desktop e Mobile).

O projeto adota uma divisão clara de responsabilidades: a lógica de negócio e manipulação de estado residem em um hook customizado (`useTodo`), as preferências visuais de tema são geridas globalmente via React Context API (`ThemeContext`), e a estilização aproveita o poder do novo Tailwind CSS v4.

---

## 🚀 Funcionalidades

- **Criação de Tarefas**: Inserção de novos afazeres através do campo de texto com suporte à submissão via formulário.
- **Marcação de Conclusão**: Alternância do status de cada item (pendente/concluído) com estilo visual dedicado (ícone de check em gradiente e texto riscado).
- **Exclusão Individual**: Remoção pontual de qualquer tarefa da lista ao clicar no botão de exclusão (`×`).
- **Limpeza em Lote**: Ação dedicada (*Clear Completed Tasks*) para remover de uma só vez todos os itens concluídos.
- **Filtros Dinâmicos**: Visualização segmentada em três visões:
  - **All**: Exibe todas as tarefas cadastradas;
  - **Active**: Exibe apenas tarefas pendentes;
  - **Completed**: Exibe apenas tarefas finalizadas.
- **Contador em Tempo Real**: Exibição da quantidade total de itens exibidos na lista.
- **Suporte a Temas (Dark / Light Mode)**:
  - Tema Escuro (*Dark*) e Tema Claro (*Light*);
  - Troca dinâmica de paletas de cores, fundos (hero banners) e ícones (sol/lua) através de um clique;
  - Gerenciamento centralizado com Context API.
- **Layout Responsivo**:
  - Interface otimizada para telas móveis e computadores de mesa;
  - Em dispositivos móveis, a barra de filtros é posicionada em um bloco inferior dedicado para melhor ergonomia (*thumb-friendly*).

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias e ferramentas:

- **React 19**: Biblioteca para construção de interfaces de usuário baseadas em componentes funcionais.
- **TypeScript**: Superset tipado do JavaScript que oferece tipagem estática, autocompletion confiável e detecção de erros em tempo de compilação.
- **Vite**: Ferramenta de build de última geração com inicialização rápida e Hot Module Replacement (HMR) eficiente.
- **Tailwind CSS v4 (`@tailwindcss/vite`)**: Nova geração do framework CSS utilitário, com configuração baseada em `@theme` e design tokens integrados diretamente no CSS.
- **React Context API**: Gerenciamento de estado global para controle e compartilhamento do tema entre componentes sem *prop drilling*.
- **Custom Hooks**: Abstração da lógica de gerenciamento da lista de tarefas, promovendo código reutilizável e desacoplado da interface.

---

## 🧠 Conceitos de React e TypeScript Praticados

Esta aplicação serviu como laboratório para aplicação prática de conceitos modernos de desenvolvimento:

- **Custom Hook para Lógica de Negócio (`useTodo`)**: Isolamento completo da regra de negócio fora dos componentes de renderização, centralizando estados (`todoList`, `filter`, `filteredTodos`) e manipuladores (`addTodo`, `toggleTodoCompleted`, `removeTodo`, `clearCompleted`).
- **Estado Global com Context API (`ThemeContext` / `ThemeProvider`)**: Criação de um contexto dedicado para alternância de tema entre *light* e *dark*, tornando o estado acessível a qualquer componente filho sem necessidade de repasse manual de propriedades.
- **Tipagem Estática Estrita com TypeScript**:
  - Modelagem do dado de tarefa via interface `Todo` (`id`, `text`, `completed`);
  - Tipagem restrita de filtros via Union Types (`TodoFilter = "all" | "active" | "completed"`);
  - Tipagem precisa de props para componentes (`TodoListProps`, `TodoInputProps`, etc.) e eventos de formulário (`SubmitEvent<HTMLFormElement>`).
- **Imutabilidade de Estado**: Aplicação de métodos imutáveis (`map`, `filter` e operador *spread* `...`) para garantir atualizações previsíveis no estado do React.
- **Captura Eficiente de Formulários com `FormData`**: Obtenção do valor do input diretamente no evento de submissão do formulário, simplificando a manipulação sem a necessidade de estados controlados caractere por caractere.
- **Componentização e Baixo Acoplamento**: Estruturação de componentes com responsabilidades bem definidas, facilitando testes, manutenibilidade e escalabilidade do código.
- **Design Tokens e Temas com Tailwind CSS v4**: Utilização de variáveis de tema (`--color-check-background-start`, `--color-bright-blue`, etc.) e classes utilitárias adaptativas dinâmicas (`bg-neutral-...`, `text-neutral-...`).

---

## 📁 Organização e Estrutura do Código

A arquitetura do projeto segue um padrão modular com separação evidente entre componentes visuais, lógica de negócio e configurações globais de estilo:

```text
├── public/                      # Recursos estáticos acessíveis diretamente
│   ├── fonts/                   # Arquivos da fonte Josefin Sans (woff2)
│   └── images/                  # Imagens de fundo (desktop/mobile) e ícones SVG
├── src/
│   ├── components/              # Componentes visuais da interface
│   │   ├── TodoContainer/       # Wrapper principal com background e centralização do layout
│   │   ├── TodoForm/            # Formulário de entrada e inserção de novas tarefas
│   │   ├── TodoHeader/          # Cabeçalho com título e botão de alternância de tema
│   │   └── TodoList/            # Lista de itens, ações de status, filtros e contador
│   ├── contexts/                # Gerenciamento de estado global
│   │   ├── theme.ts             # Configurações de classes utilitárias e ícones por tema
│   │   └── ThemeContext.tsx     # Contexto React e Provider para controle do tema
│   ├── hooks/                   # Hooks customizados com regras de negócio
│   │   └── useTodo.ts           # Hook responsável pelas operações da lista de tarefas
│   ├── styles/                  # Estilização global
│   │   └── global.css           # Importação do Tailwind, @theme, fontes e classes base
│   ├── App.tsx                  # Componente raiz da aplicação (orquestrador)
│   └── main.tsx                 # Ponto de entrada da aplicação React
├── index.html                   # Documento HTML base
├── package.json                 # Manifesto de dependências e scripts npm
├── tsconfig.json                # Configurações do compilador TypeScript
└── vite.config.ts               # Configuração do Vite com os plugins do React e Tailwind CSS
```

### Divisão de Responsabilidades:

1. **Camada de Regra de Negócio (`useTodo.ts`)**: Isola os estados da lista de tarefas e das opções de filtro. Concentra as funções de adicionar, alterar status, excluir e filtrar, retornando apenas os dados e callbacks necessários para a UI.
2. **Camada de Contexto e Tema (`ThemeContext.tsx` & `theme.ts`)**: Controla se o aplicativo está no modo claro ou escuro e provê as classes de estilo e os ícones correspondentes a cada elemento da interface.
3. **Camada de Componentes (`components/`)**: Componentes puros e funcionais responsáveis apenas por apresentar os dados na tela e repassar eventos de interação do usuário para os manipuladores adequados.
4. **Componente Raiz (`App.tsx`)**: Orquestra o fluxo geral integrando o hook `useTodo` aos componentes estruturais (`TodoHeader`, `TodoForm`, `TodoList`).

---

## 🔄 Fluxo da Aplicação

O ciclo de vida das interações na aplicação ocorre da seguinte forma:

1. **Carregamento Inicial**: A aplicação é iniciada dentro do `ThemeProvider`, renderizando a interface com o tema escuro pré-definido e carregando a lista de tarefas.
2. **Adição de Tarefa**: O usuário digita a descrição no campo de texto e pressiona `Enter`. O `TodoForm` aciona o callback `addTodo`, que valida o conteúdo via `FormData`, cria um novo registro com identificador único (`Date.now()`) e limpa o campo.
3. **Alternância de Conclusão**: Ao clicar sobre o círculo de seleção de um item, o `toggleTodoCompleted` inverte o estado `completed` da respectiva tarefa, atualizando instantaneamente sua representação visual.
4. **Filtragem**: Ao selecionar um dos filtros (*All*, *Active* ou *Completed*), o estado `filter` é atualizado, e `filteredTodos` reflete de forma reativa apenas as tarefas que atendem ao critério, sem alterar a lista original.
5. **Remoção e Limpeza**:
   - Clicar no botão `×` aciona `removeTodo(id)`, excluindo aquela tarefa específica;
   - Clicar em *Clear Completed Tasks* aciona `clearCompleted()`, removendo de uma só vez todos os itens concluídos.
6. **Troca de Tema**: Ao clicar no ícone do cabeçalho, a função `toggleTheme` alterna entre `light` e `dark`, reconfigurando as cores de fundo, bordas, textos e imagens de cabeçalho em toda a página.

---

## 🎨 Sistema de Temas (Dark / Light)

A alternância visual foi desenhada de forma limpa combinando **Context API** e **Tailwind CSS v4**:

- **Mapeamento Declarativo**: O arquivo `theme.ts` define para cada modo as classes Tailwind de fundo, texto, bordas e o ícone correspondente (`icon-sun.svg` para modo claro e `icon-moon.svg` para modo escuro).
- **Sem Flash de Estilo**: As classes são aplicadas diretamente nos componentes baseadas no valor emitido pelo contexto.
- **Background Responsivo**: A área superior (*hero banner*) utiliza imagens temáticas distintas para desktop e mobile (`bg-desktop-dark`, `bg-desktop-light`, etc.).

---

## 💻 Como Executar Localmente

### Pré-requisitos:
- [Node.js](https://nodejs.org/) instalado na máquina (versão 18 ou superior recomendada);
- Gerenciador de pacotes `npm` (ou `yarn` / `pnpm`).

### Passo a passo:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/MatVolotao/TodoList.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd TodoList
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Acesse no navegador:**
   Abra o endereço exibido no terminal (geralmente `http://localhost:5173`).

---

## 📈 Aprendizados e Evolução Técnica

O desenvolvimento deste projeto proporcionou aprofundamento em fundamentos essenciais do ecossistema React:

- Estruturação de **Custom Hooks** para isolamento de lógica de negócio e separação estrita de camadas.
- Aplicação prática de **React Context API** para controle de estados transversais (temas).
- Tipagem robusta com **TypeScript**, evitando comportamentos inesperados e garantindo integridade de dados.
- Exploração dos novos recursos do **Tailwind CSS v4** integrado com **Vite** via `@tailwindcss/vite`.
- Manipulação imutável de estados e compreensão aprofundada dos ciclos de renderização do React.
- Criação de layouts responsivos com atenção aos detalhes de usabilidade e acessibilidade.

---

Desenvolvido por **MatVolotao**.

- GitHub: [@MatVolotao](https://github.com/MatVolotao)
- Repositório: [TodoList](https://github.com/MatVolotao/TodoList)
