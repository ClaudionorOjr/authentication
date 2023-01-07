# Authentication

> API de autenticação.

Projeto com estrutura pronta para autenticação de usuário/admin.

## Getting Start

```bash
# Instalação das dependências
$ npm install

# Gerar o banco de dados
$ npx prisma migrate dev

# Gerar o Diagrama de Entidade-Relacionamento
$ npx prisma generate

# Criar o usuário de Admin
$ npx prisma db seed
```

```bash
# Executar aplicação
$ npm run dev
```

---

## Tecnologias

- [bcryptjs](asd)

```bash
$ npm i bcryptjs
$ npm i @types/bcryptjs -D
```

- [dotenv](asd)

```bash
$ npm i dotenv
```

- [express](asd)

```bash
$ npm i express
$ npm i @types/express -D

# Tratativa de erros assíncronos pelo express
$ npm i express-async-errors
```

<!-- - [jest](asd)

```bash
$ npm i jest ts-jest ts-node @types/jest -D

# Arquivo de configuração
$ npx jest --init
``` -->

- [jsonwebtoken](asd)

```bash
$ npm i jsonwebtoken
$ npm i @types/jsonwebtoken -D
```

- [prettier](asd)

```bash
$ npm i prettier -D
```

- [prisma](asd)

```bash
$ npm i prisma -D
$ npm i @prisma/client

# Biblioteca para gerar o diagrama de Entidade-Relacionamento.
$ npm i prisma-erd-generator @mermaid-js/mermaid-cli -D
```

- [swagger](asd)

```bash
$ npm i swagger-ui-express
$ npm i @types/swagger-ui-express -D
```

- [typscript](asd)

```bash
$ npm i typescript -D
$ npm i tsx -D
```

- [vitest](asd)

```bash
$ npm i jest ts-jest ts-node @types/jest -D

# Arquivo de configuração
$ npx jest --init
```

## Iniciando o projeto

### **Comandos**

```bash
$ npm init -y
$ npx tsc --init
$ npx prisma init
```

### **Alterações**

- Alterar no arquivo `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "resolveJsonModule": true /* Para poder importar arquivos .json como swagger.json */
  }
}
```

- Adicionar arquivo `settings.json` na pasta .vscode:

```json
// Configuração Prettier
{
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "files.eol": "\n",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

- Marquei o `Editor: Format On Save` nas configurações do VScode para formatar com o prettier.

- Adicionar no `schema.prisma`:

```prisma
generator erd {
  provider = "prisma-erd-generator"
}
```

- Instalar o `dotenv` e adicionar ao `server.ts`:

```ts
import 'dotenv/config';
```

- Criar o arquivo `vite.config.ts` com as seguintes configurações:

```ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {},
});
```

- Adicionar ao `package.json`:

```json
"scripts": {
    "test": "vitest",
    "test:watch": "vitest --watch"
  },
```

- Alterar

<!-- - Alterar no arquivos `jest.config.ts`:

```ts
bail: true,
preset: "ts-jest",
``` -->

### Anotações

- Nessa aplicação a autenticação de user e admin é separada. Há a rota e middleware para criação de token e validação do usuário comum e outra rota para o usuário admin.
- Corrigir paths de importação

## Check list

[x] Criação de usuário;  
[x] Seed de criação de admin;  
[x] Token de autenticação de usuário;  
[x] Token de autenticação de admin;  
[x] Middlewares validação de token de usuário;  
[x] Middlewares validação de token de admin;  
[x] Middleware de tratativa de erros;  
[x] Documentação com Swagger;  
[] Recuperação de senha;  
[] Containers no docker para o BD e aplicação;  
[] Alterar BD para o postgress;

- **Futuro**:  
  [] Login social com Google;

<!-- ## Há fazer!

- Separar model de refresh token de user e admin;
- Alterar nomenclatura de Users para User;
- Alterar model de user retirando o campo googleId;
- Alterar model de admin e deixar o campo refreshToken como o de user;
- Corrigir código de `GenerateToken` e `GenerateRefreshToken`;
- Rever a lógica do Refresh Token para criar um novo token e um novo refresh token, cada vez que o refresh token for usado, e caso expire o usuário deverar logar novamente; -->
