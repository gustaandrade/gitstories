# [gitstories](https://gitstories.netlify.app)

<div align="center">
  <img src="./src/assets/home.png" alt="gitstories">
</div>
<br />

<div align="center">
  <img alt="GitHub" src="https://img.shields.io/github/license/gustaandrade/gitstories">
  &emsp;
  <img alt="Netlify" src="https://img.shields.io/netlify/961ee5c8-c18d-4378-bdb3-f23e65706109">
</div>
<br />

Este repositório contém os códigos-fonte para a versão web do projeto [gitstories](https://gitstories.netlify.app), um site que permite buscar as "stories" de um perfil do Github, isto é, suas características de perfil e seus repositórios, usando a API Github v3.

## Desenvolvimento

<div align="center">
  <img src="./src/assets/search.png" alt="gitstories">
</div>
<br />

O projeto gitstories foi feito em React e desenvolvido em TypeScript.

Entre as principais bibliotecas usadas para o desenvolvimento, estão:

- `styled-components`, para a estilização geral de componentes e troca de temas entre claro e escuro;
- `react-router` e `react-router-dom`, para a construção e manipulação de rotas;
- `redux`, `react-redux` e `redux-saga`, para a manipulação de estados do aplicativo e busca de dados de forma assíncrona na API do Github;
- `react-icons`, para a inserção de ícones.

## Principais características

- Use a caixa de pesquisa na página inicial para ver os seus gitstories;
- Veja e compartilhe a busca usando o link com _query parameter_ `?q=username`;
- Use o aplicativo em tema claro ou em tema escuro.

## Como executar

Para executar esse projeto em modo de desenvolvimento, você precisa ter pelo menos um gerenciador de pacotes Node instalado em sua máquina. Os dois mais comuns são o `npm` e o `yarn`.

Logo após, basta clonar este repositório, criando uma cópia local dele na sua máquina, usando o Git.

Com o projeto em sua máquina, o abra em seu editor de preferência e execute o comando `npm install` ou `yarn` para instalar todas as dependências necessárias.

Por fim, execute o comando `npm start` ou `yarn start` na raiz do projeto e este irá abrir uma janela no navegador `http://localhost:3000`.

Pronto, você agora tem acesso a versão de desenvolvimento desse projeto, basta alterar os scripts em seu editor e veja a mudança acontecer no navegador. Divirta-se!

Caso esse processo não tenha funcionado, abra uma _issue_ neste projeto detalhando o que aconteceu.

## Como contribuir

Para contribuir com esse projeto, basta seguir os passos abaixo:

1. Faça um fork desse repositório em sua conta pessoal no Github;
2. Crie uma branch de `feature/nome-da-feature` em seu repositório;
3. Faça commits e encha essa branch criada com bastante conteúdo;
4. Faça um pull request da sua branch para este repositório;
5. Acompanhe a avaliação do pull-request e responda se necessário.

## Tarefas futuras

- **Internacionalização:** atualmente o aplicativo gitstories está em inglês. Para a internacionalização do mesmo, é preciso implementar usando algum pacote de i18n (como o i18next), e criar as traduções;
- **Mais testes:** a aplicação possui um número considerável de componentes e o número atual de testes não cobre todas as ações;
- **Melhor deploy:** o deploy atualmente é feito de forma automática pelo Netlify quando um _pull request_ é feito para a branch `master`. Esse deploy automático pode ser melhorado com uma Github Action que rode os testes antes de subir uma nova versão, por exemplo, além de outras verificações que forem necessárias;
- **Mais filtros:** mais filtros podem ser adicionados na parte de listagem de repositórios, como filtragem por linguagens, branches, estrelas, forks e watchers, por exemplo;
- **Mais detalhes:** a API do Github tem um leque enorme de dados que podem complementar essa busca. Podem ser listadas as linguagens mais usadas pelo usuário, ou linguagens por repositório, por exemplo.

## Autores

- **Gustavo Andrade (@gustaandrade)**: Desenvolvedor Full Stack e Desenvolvedor de Jogos - [Portfólio](https://gustavoandrade.design)

## Licença

[MIT](./LICENSE)

<p align="center">
   Made with :purple_heart:
</p>
