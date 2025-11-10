#  Challenge Hospital das Clínicas 2025 - Nexus Health

## Sobre o projeto
A Nexus health é uma empresa que, em parceria com o **Hospital das Clínicas da Faculdade de Medicina da USP (HCFMUSP)**, busca transformar o acesso à saúde digital. Nosso foco é auxiliar pacientes com conhecimento tecnológico limitado, garantindo que consultas presenciais e teleconsultas sejam mais acessíveis e intuitivas para todos.
Sabemos que a tecnologia pode ser um obstáculo para muitos, e é por isso que desenvolvemos soluções que simplificam o uso de celulares na saúde digital. Por meio de suporte personalizado, interfaces intuitivas e conteúdos educativos, capacitamos os pacientes a navegar pela plataforma hospitalar com segurança e confiança.
Com a Nexus Health, a afinidade digital deixa de ser uma barreira e passa a ser um facilitador no cuidado com a saúde. Nossa missão é promover uma experiência médica mais inclusiva, garantindo que todos possam acessar os serviços de forma simples, independente do nível de familiaridade com a tecnologia.

Com uma interface interativa, o site permite que os usuários possam:
- Saber mais sobre o Hospital das Clínicas da Faculdade de Medicina da USP (HCFMUSP);
- Consultar os tipos de institutos que o Hospital proporciona, para que os pacientes possam saber que tipo de serviços eles podem se consultar;
- Esclarecer dúvidas frequentes sobre consultas presenciais, remotas, pré-consultas, pós-consultas e cuidados com a saúde;
- Conhecer os integrantes e desenvolvedores do projeto e encontrar seus perfis do LinkedIn e GitHub, caso tenham dúvidas mais específicas;
- Inserir dados pessoais para obter suporte, facilitar o contato e o cadastro;

## Estrutura do Projeto
```
frontend
│
├── nexushealth
│
├── node_modules
│
├── public
│
└── src
│    ├── components
│    │   ├── Cabecalho
│    │   ├── Menu
│    │   ├── PerguntaItem
│    │   └── Rodape
│    ├── img
│    ├── data
│    ├── routes
│    │   ├── Contato
│    │   ├── Error
│    │   ├── Home
│    │   ├── Integrantes
│    │   ├── Perguntas
│    │   └── Servicos
│    │   └── Sobre
│    ├── App.tsx
│    ├── globals.css
│    └── main.tsx
│
├── vite-env.d.ts
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Como rodar o projeto (ambiente de dev)

### 1. Clone o Repositório

Primeiro, clone este repositório para o seu ambiente local usando o terminal:

```bash
git clone https://github.com/NexusHealth-1TDSPJ/frontend.git
cd frontend/nexushealth
```
### 2. Instale as dependências do projeto
Dentro da pasta do projeto, instale todas as dependências necessárias utilizando o npm (ou o seu gerenciador de pacotes preferido):

```bash
npm install

```
Este comando irá ler o arquivo package.json e baixar todas as bibliotecas listadas (como React, Vite, Tailwind CSS, etc.).

Também instale o react-hook-form para a excecução correta de algumas funcionalidades

```bash
npm i react-hook-form
```

### 3. Execute o Projeto

Após a instalação das dependências, inicie o servidor de desenvolvimento do Vite:

```bash
npm run dev
```

### 4. Acesse a Aplicação

O terminal mostrará uma mensagem indicando que o servidor está rodando. Geralmente, a aplicação estará disponível no seguinte endereço:

```
http://localhost:5173
```

Abra o seu navegador e acesse essa URL para ver o projeto em execução!

## Como rodar o projeto (ambiente de prod)

cole o seguinte link no seu navegador de preferência

```bash
https://nexushealth.vercel.app/
```

caso queira visitar a api 

```bash
https://java-hc-4.onrender.com/
```

tabela de endpoints

```
| Método HTTP | Endpoint (URI) | Descrição | Corpo da Requisição | Códigos de Resposta Esperados |
| GET | /profissionais | Lista todos os profissionais cadastrados | - | 200 OK → Lista retornada  500 Internal Server Error → Erro interno ao listar |
| GET | /consultas | Lista todos os consultas cadastrados | - | 200 OK → Lista retornada  500 Internal Server Error → Erro interno ao listar |
| GET | /paciente | Lista todos os pacientes cadastrados | — | 200 OK → Lista retornada  500 Internal Server Error → Erro interno ao listar |
| GET | /paciente/{id} | Busca um paciente pelo ID | — | 200 OK → Paciente encontrado  400 Bad Request → ID inválido  404 Not Found → Paciente não encontrado  500 Internal Server Error → Erro interno |
| GET | /paciente/cpf/{cpf} | Busca um paciente pelo CPF | — | 200 OK → Paciente encontrado  400 Bad Request → CPF inválido  404 Not Found → Paciente não encontrado  500 Internal Server Error → Erro interno |
| POST | /paciente | Cadastra um novo paciente | JSON com os dados do paciente | 201 E Created → Paciente criado com sucesso  400 Bad Request → Dados inválidos  409 Conflict → CPF já cadastrado  500 Internal Server Error → Erro interno |
| PUT | /paciente/{id} | Atualiza um paciente existente pelo ID | JSON com os dados atualizados | 200 OK → Paciente atualizado  400 Bad Request → Dados inválidos  404 Not Found → Paciente não encontrado  409 Conflict → CPF duplicado  500 Internal Server Error → Erro interno |
| DELETE | /paciente/{id} | Exclui um paciente pelo ID | — | 204 No Content → Paciente excluído com sucesso  400 Bad Request → ID inválido  404 Not Found → Paciente não encontrado  409 Conflict → Restrição de chave estrangeira  500 Internal Server Error → Erro interno |

 
```

## Tecnologias Utilizadas
As tecnologias utilizadas no projeto foram: 

![NPM](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)


## Integrantes do projeto
- Erik Naoki Miyasato - RM: 565771 | 1TDSPJ
- Hector Salgado Soria - RM: 565498 | 1TDSPJ
- João Henrique Batista Leal - RM: 564361 | 1TDSPJ

## Link do repositório
https://github.com/NexusHealth-1TDSPJ/frontend