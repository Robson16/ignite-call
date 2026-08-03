# Ignite Call

Agendamento descomplicado. Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre.

<div align="center">
  <a href="https://ignite-call-gamma-liart.vercel.app/" target="_blank">
    <img src="./cover.png" alt="Ignite Call Cover" width="100%" />
  </a>
</div>

## 📌 Sobre o Projeto

Ignite Call é uma aplicação web moderna que simplifica o processo de agendamento. Usuários podem conectar suas contas de calendário e compartilhar sua disponibilidade com outras pessoas, permitindo que elas marquem compromissos automaticamente em horários livres.

## 🌐 Demo

- **Aplicação**: [ignite-call-gamma-liart.vercel.app](https://ignite-call-gamma-liart.vercel.app/)
- **Repositório**: [github.com/Robson16/ignite-call](https://github.com/Robson16/ignite-call)

## 🛠️ Tecnologias

- **Framework**: [Next.js](https://nextjs.org/) 16.1.4
- **UI Library**: [React](https://react.dev/) 19.2.3
- **Styling**: [Styled Components](https://styled-components.com/) 6.3.8
- **Design System**: [@beryl-ui/react](https://www.npmjs.com/package/@beryl-ui/react) 2.2.1
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/) 5
- **Ferramentas**:
  - ESLint 9 (linting)
  - Prettier 3.8.1 (formatação)

## 📋 Requisitos

- Node.js 18+
- npm ou yarn
- Docker

## 🚀 Como Começar

### Banco de Dados

Este projeto usa MySQL. Para iniciar o banco de dados em um contêiner Docker, execute:

```bash
docker-compose up -d
```

### Migração para PostgreSQL (dev e prod)

Para deixar o app preparado para futuramente subir em produção com PostgreSQL, a seguir estão os pontos principais da migração com base na documentação de referência:

#### Desenvolvimento

1. Subir o PostgreSQL localmente com Docker:

```bash
docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

2. Definir as variáveis de ambiente:

```env
DATABASE_URL="postgresql://postgres:docker@localhost:5432/ignitecall"
DATABASE_DIRECT_URL="postgresql://postgres:docker@localhost:5432/ignitecall"
```

3. Ajustar o Prisma para usar PostgreSQL no arquivo `prisma/schema.prisma`:

```prisma
datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DATABASE_DIRECT_URL")
}
```

4. Gerar novas migrations:

```bash
rm -rf prisma/migrations
npx prisma migrate dev
```

5. Ajustar a query de datas bloqueadas para usar funções equivalentes do PostgreSQL, como `EXTRACT`, `INTERVAL` e `DOW`.

#### Produção

Para produção, uma opção recomendada é usar o Neon, que oferece PostgreSQL com suporte serverless.

- Use uma string de conexão direta para `DATABASE_DIRECT_URL`.
- Use uma string pooled para `DATABASE_URL`.
- Adicione `connect_timeout=10` nas duas conexões.
- Para a conexão pooled, adicione também `pgbouncer=true`.

Exemplo:

```env
DATABASE_DIRECT_URL="postgresql://usuario:senha@host/ignitecall?sslmode=require&connect_timeout=10"
DATABASE_URL="postgresql://usuario:senha@host-pooler/ignitecall?sslmode=require&connect_timeout=10&pgbouncer=true"
```

> A separação entre `DATABASE_URL` e `DATABASE_DIRECT_URL` é importante porque a conexão pooled é usada pelas queries da aplicação e a conexão direta é usada por comandos do Prisma CLI, como migrations.

Após configurar as variáveis, rode:

```bash
npx prisma migrate deploy
```

Essa configuração é útil para preparar o deploy do app em produção com PostgreSQL sem depender do MySQL.

Referência original da documentação: [Ignite Call - Postgres (dev e prod)](https://efficient-sloth-d85.notion.site/Ignite-Call-Postgres-dev-e-prod-bd105befe0ab411cb7074aad72819613)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Robson16/ignite-call.git
cd ignite-call
# Instale as dependências
npm install
```

## ⚙️ Configuração

Antes de rodar a aplicação, você precisa configurar as variáveis de ambiente. Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

```env
# Prisma / Database
DATABASE_URL="file:./dev.db"

# Google oAuth
GOOGLE_CLIENT_ID="seu_client_id_aqui"
GOOGLE_CLIENT_SECRET="seu_client_secret_aqui"

# NextAuth
# Você pode gerar um segredo com: openssl rand -base64 32
NEXTAUTH_SECRET="seu_segredo_aqui"
```

#### Obtendo credenciais do Google OAuth

Para que a integração com o Google Calendar funcione (leitura de horários e agendamento), é necessário criar um projeto no Google Cloud Platform:

1.  Acesse o Google Cloud Console.
2.  Crie um novo projeto ou selecione um existente.
3.  No menu de navegação, vá para **APIs & Services** > **Library**.
4.  Procure e ative a **Google Calendar API**.
5.  No menu, vá para **APIs & Services** > **OAuth consent screen**.
    -   Selecione o tipo de usuário **External** e clique em **Create**.
    -   Preencha as informações obrigatórias (nome do app, e-mail de suporte, etc.) e salve.
    -   Na etapa "Scopes", clique em **Add or Remove Scopes**. Adicione os escopos da Google Calendar API:
        -   `.../auth/calendar.readonly`
        -   `.../auth/calendar.events`
    -   Na etapa "Test users", adicione seu próprio e-mail do Google para poder testar a aplicação em desenvolvimento.
6.  Volte ao menu e vá para **APIs & Services** > **Credentials**.
7.  Clique em **Create Credentials** > **OAuth client ID**.
8.  Selecione o tipo de aplicação como **Web application**.
9.  Em "Authorized redirect URIs", adicione a URI de callback do NextAuth: `http://localhost:3000/api/auth/callback/google`.
10. Clique em **Create**. Copie o **Client ID** e o **Client Secret** gerados para o seu arquivo `.env.local`.

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

### Build para Produção

```bash
# Crie a build de produção
npm run build

# Inicie o servidor de produção
npm start
```

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm start` - Inicia o servidor de produção
- `npm run lint` - Verifica problemas de linting
- `npm run lint:fix` - Corrige automaticamente problemas de linting
- `npm run format` - Formata o código com Prettier
- `npm run format:check` - Verifica se o código está formatado
- `npm run check-up` - Executa format e lint:fix

## 📁 Estrutura do Projeto

```
ignite-call/
├── public/              # Arquivos estáticos
├── src/
│   ├── app/            # Aplicação Next.js (App Router)
│   │   ├── layout.tsx  # Layout principal
│   │   ├── page.tsx    # Página inicial
│   │   ├── _components/  # Componentes de UI
│   │   │   └── HomeIntro/
│   │   ├── _providers/   # Provedores de contexto (React Context)
│   │   └── _lib/
│   ├── _styles/        # Estilos globais
│   └── ...
├── package.json
├── tsconfig.json
├── eslint.config.mjs
├── next.config.ts
└── README.md
```

## 🎨 Recursos Principais

- ✅ Agendamento simplificado
- ✅ Integração com calendários
- ✅ Interface responsiva e moderna
- ✅ Desenvolvido com tecnologias modernas

## 🎯 Layout

O design da aplicação foi criado no Figma e pode ser visualizado no arquivo da comunidade:

- **[Ignite Call - Layout no Figma](https://www.figma.com/community/file/1161274296921389678)**

O layout define a estrutura visual e a experiência do usuário, servindo como referência para desenvolvimento dos componentes da aplicação.

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## 👤 Autor

**Robson** - [GitHub](https://github.com/Robson16)
