# Vue.js Application com Mocks de Dados

Este projeto Vue.js simula uma aplicação de gerenciamento de clientes e associação de produtos utilizando dados mockados. A aplicação implementa funcionalidades de CRUD para clientes e produtos e usa `localStorage` para simular a persistência de dados.

## Resumo do Desenvolvimento

Durante o desenvolvimento deste teste, a ênfase foi colocada na criação de um conjunto reutilizável de componentes Vue.js. A estrutura do código foi organizada para promover a reutilização e a manutenção eficiente. As decisões tomadas para a arquitetura da aplicação foram guiadas pela facilidade de extensão e pela simplicidade no gerenciamento de estado usando o `localStorage`.


## Estrutura do Projeto

O projeto é estruturado com os seguintes componentes principais:

- **`SelectProductModal`**: Componente responsável por pesquisar e selecionar Produtos, esse produtos são retornado para o componente PAI.
- **`CustomerView`**: Pagina responsável por apresentar com um formato de tabela os clientes associados na aplicação, nele temos algumas funcionalidades como criar , editar e remover customers.
- **`CreateCustomerView`**: Pagina responsável por criar clientes na aplicação.
- **`EditCustomerView`**: Habilita a edição dos detalhes de um cliente.
- **`ProductsView`**: Pagina responsável por apresentar em formato de tabela os produtos associados na aplicação, nele temos algumas funcionalidades como criar, editar e remover produtos.
- **`EditProductView`**: Habilita a edição dos detalhes de um cliente.
- **`CreateProductView`**: pagina responsável por criar produtos.
- **`TableDisplay`**: Componente padrão para exibir tabelas de dados.
  
Dados mock são utilizados para simular informações de clientes (`mockCustomers`) e produtos (`mockProducts`), sendo inicializados no `localStorage` ao carregar a aplicação.

## Como Rodar o Projeto

Siga os passos abaixo para rodar o projeto localmente:

### Instalação das Dependências

Utilize o npm ou yarn para instalar as dependências do projeto:

npm install
#### ou
yarn install

### Execução do Servidor de Desenvolvimento

Inicie o servidor de desenvolvimento Vue.js:

npm run dev
#### ou
yarn dev


### Acesso à Aplicação

Acesse `http://localhost:5080`

## Funcionalidades Implementadas

- **Dados Mock**: Implementação de dados mock para clientes e produtos.
- **Componente Modal**: Um componente reutilizável `SelectProductModal` para a seleção de produtos.
- **CRUD de Clientes**: Interface para a adição, edição, visualização e exclusão de clientes, incluindo associação de produtos.

## Tecnologias Utilizadas

- Vue
- Typescript
- LocalStorage
- Vue Router
- SCSS
- Font Awesome
- Vue CLI


## Melhorias Recomendadas para o Projeto

### Testes Unitários e de Integração

Implementar testes unitários com Vue Test Utils e Jest para validar os componentes e o fluxo da aplicação. Isso ajudará a identificar e corrigir bugs mais rapidamente e a manter a qualidade do código.


### Componentes de Formulário Reutilizáveis

Criar componentes de formulário reutilizáveis para encapsular lógica e validação, aumentando a consistência e diminuindo a duplicação de código.

### Validação de Formulário Avançada

Integrar uma biblioteca de validação de formulários,para aprimorar a experiência do usuário com validação do lado do cliente e feedback instantâneo.


### Melhorias de UI/UX

Conduzir testes de usabilidade para refinar a interface do usuário com base nas interações dos usuários e feedback, aprimorando a experiência geral do usuário.

### Lazy Loading e Code Splitting

Utilizar técnicas de carregamento preguiçoso e divisão de código com Vue Router para otimizar o desempenho da aplicação à medida que ela cresce em tamanho e complexidade.

### Toast

Criar componente responsável por apresentar, notificações ao usuário como:
- Sucesso
- Alertas
- Erros




## Considerações Finais

Este projeto serve como um exemplo básico e introdutório para a implementação de mocks de dados em uma aplicação Vue.js. Ele é adequado para fins de desenvolvimento e testes, mas para aplicações em produção, é recomendável considerar o uso de uma base de dados real e gerenciamento de estado avançado (com Vuex ou Pinia, por exemplo).


## Construido Por:

Victor Hugo Beppler Pereira

### Linkedin

https://www.linkedin.com/in/victorhugobp/

### Github

https://github.com/victorbeppler

### Portfólio

https://victorbeppler.dev