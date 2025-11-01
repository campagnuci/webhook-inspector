# 📝 Webhook Inspector

Uma aplicação fullstack para capturar, inspecionar e gerenciar webhooks em tempo real, além de permitir gerar Typescript handlers para os webhooks.

## 📋 Características

- ✅ API REST com validação de tipos
- ✅ Documentação automática com Swagger
- ✅ Interface web moderna com React
- ✅ Banco de dados PostgreSQL
- ✅ CORS habilitado para múltiplas origens
- ✅ Type-safe com TypeScript e Zod

## 🛠️ Tecnologias Utilizadas

### Backend

- **[Fastify](https://www.fastify.io/)** - Framework HTTP
- **[Drizzle ORM](https://orm.drizzle.team/)** - ORM Type-safe
- **[Zod](https://zod.dev/)** - Validação de dados
- **[Fastify Swagger](https://github.com/fastify/fastify-swagger)** - Documentação OpenAPI
- **[Scalar API Reference](https://scalar.com/)** - Interface para API docs

### Frontend

- **[React 19](https://react.dev/)** - Framework
- **[Vite](https://vitejs.dev/)** - Build tool
- **[Biomejs](http://biomejs.dev)** - Formatter e Linter

## 🏁 Como Instalar

Siga os passos abaixo para configurar e executar o projeto em seu ambiente local.

### 1. Clonar o Repositório

Primeiro, clone o repositório para a sua máquina local usando o Git:

```js
git clone https://github.com/campagnuci/webhook-inspector.git
cd webhook-inspector
```

### 2. Configurando o Backend (API)

Agora, vamos instalar as dependências e iniciar o servidor da API.

```bash
# 1. Acessar o diretório da API
cd api

# 2. Instalar as dependências
pnpm install

# 3. Criar uma cópia do arquivo de variáveis de ambiente
cp .env.example .env

# 4. Em seguida, ajuste as variáveis no arquivo .env conforme necessário (ex: banco de dados, e chave do Gemini)

# 5. Executar as migrações do banco de dados (se aplicável)
pnpm db:migrate

# 6. Iniciar o servidor em modo de desenvolvimento
pnpm dev
```

O servidor da API estará rodando em `http://localhost:3333` (ou na porta configurada no seu `.env`).

Para rodar em ambiente de produção, siga os passos acima até a etapa 5, é normal não existir um .env em ambientes de produção, então insira as variáveis no ambiente do servidor.

Após isso basta rodar:

```bash
# Continuando da etapa 5. das instruções anteriores.
# Realizar a build do projeto para Javascript
pnpm build

# Iniciar o servidor em modo de produção
pnpm start
```

### 3. Configurando o Frontend (Web)

Em um novo terminal, navegue até a pasta `web` para instalar as dependências e iniciar a aplicação React.

```bash
# Acesse o diretório do frontend (a partir da raiz do projeto)
cd web

# Instale as dependências
pnpm install

# Inicie a aplicação em modo de desenvolvimento
pnpm dev 
```

A aplicação web estará disponível em `http://localhost:5173`.


