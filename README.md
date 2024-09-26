# Encurtador de URL

Este é um projeto de encurtador de URLs construído com Fastify, TypeScript e Prisma. A aplicação permite que os usuários encurtem URLs longas, redirecionem para URLs encurtadas e visualizem todas as URLs encurtadas.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento do backend.
- **Fastify**: Framework web para Node.js, otimizado para desempenho.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Prisma**: ORM para acesso ao banco de dados.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados.

## Requisitos

- Node.js v18 ou superior
- PostgreSQL

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seuusuario/encurtador-url.git
   cd encurtador-url

2. **Instale as dependências:**

   ```bash
  npm install

1. **Configure o banco de dados:**
   1. Crie um banco de dados PostgreSQL
   2. Atualize as configurações de conexão no arquivo .env:

   ```bash
   DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"

2. **Execute as migrações do Prisma:**

   ```bash
   npx prisma migrate dev --name init

3. **Inicie a aplicação em modo de desenvolvimento:**
   ```bash
   npm run dev

4. **Gerendo o Build**
   ```bash
   npm run build

5. **Executando o prjeto**
   ```bash
   npm run start

## Endpoints

1. **POST /api/url/shorten**
   Encurta uma URL original.

   Requisição:
   ```bash
   {
    "originalUrl": "https://exemplo.com"
   }

   Resposta:
   {
    "originalUrl": "https://exemplo.com",
    "shortUrl": "abc123"
   }

2. **GET  /**
   Redireciona para a URL original a partir do URL encurtado.

   Exemplo: GET /abc123

2. **GET /api/url/all**
   Retorna todas as URLs encurtadas.

   ```bash
   [
    {
      "id": 1,
      "originalUrl": "https://ijade.com.br/home",
      "shortUrl": "KbwGOV_c",
      "createdAt": "2024-09-26T15:37:39.744Z"
    },
    {
      "id": 2,
      "originalUrl": "https://react.dev/",
      "shortUrl": "EdPKsFke",
      "createdAt": "2024-09-26T15:42:55.775Z"
    },
    {
      "id": 3,
      "originalUrl": "https://angular.dev/",
      "shortUrl": "QSrY9qIE",
      "createdAt": "2024-09-26T17:27:45.550Z"
    }
  ]

## Scripts
- dev: Inicia o servidor em modo de desenvolvimento.
- build: Compila a aplicação TypeScript para JavaScript.
- start: Inicia a aplicação em modo de produção.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença
Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.

## Contato
Se você tiver alguma dúvida ou sugestão, entre em contato:

Email: rodrigomoritz.br@gmail.com
GitHub: rodrigomoritz












