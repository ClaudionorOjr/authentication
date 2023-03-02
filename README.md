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

<details>
  <summary> <a href=''>bcryptjs</a> </summary>

```bash
$ npm i bcryptjs
$ npm i @types/bcryptjs -D
```

</details>

<details>
  <summary> <a href=''>dotenv</a> </summary>

```bash
$ npm i dotenv
```

</details>

<details>
  <summary> <a href=''>express</a> </summary>

```bash
$ npm i express
$ npm i @types/express -D

# Tratativa de erros assíncronos pelo express
$ npm i express-async-errors
```

</details>

<!-- - [jest](asd)

```bash
$ npm i jest ts-jest ts-node @types/jest -D

# Arquivo de configuração
$ npx jest --init
``` -->

<details>
  <summary> <a href=''>jsonwebtoken</a> </summary>

```bash
$ npm i jsonwebtoken
$ npm i @types/jsonwebtoken -D
```

</details>

<details>
  <summary> <a href=''>prettier</a> </summary>

```bash
$ npm i prettier -D
```

</details>

<details>
  <summary> <a href=''>prisma</a> </summary>

```bash
$ npm i prisma -D
$ npm i @prisma/client

# Biblioteca para gerar o diagrama de Entidade-Relacionamento.
$ npm i prisma-erd-generator @mermaid-js/mermaid-cli -D
```

</details>

<details>
  <summary> <a href=''>swagger</a> </summary>

```bash
$ npm i swagger-ui-express
$ npm i @types/swagger-ui-express -D
```

</details>

<details>
  <summary> <a href=''>typescript</a> </summary>

```bash
$ npm i typescript -D
$ npm i tsx -D
```

</details>

<details>
  <summary> <a href=''>vitest</a> </summary>

```bash
$ npm i vitest -D
```

</details>

---

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
  },
```

<!-- - Alterar no arquivos `jest.config.ts`:

```ts
bail: true,
preset: "ts-jest",
``` -->

### Anotações

- Nessa aplicação a autenticação de user e admin é separada. Há a rota e middleware para criação de token e validação do usuário comum e outra rota para o usuário admin.
- Corrigir paths de importação

## Check list

### DOING

---

- [ ] CRUD de Admin
  - [x] Seed de criação de admin;
  - [ ] Atualizar dados de admin;

---

### DONE

- [x] CRUD de Usuário

  - [x] Criar usuário;
  - [x] Deletar usuário;
  - [x] Atualizar dados de usuário;

  ***

- [x] Autenticação

  - [x] Token de autenticação de usuário;
  - [x] Token de autenticação de admin;

  ***

- [x] Middlewares
  - [x] Middlewares validação de token de usuário;
  - [x] Middlewares validação de token de admin;
  - [x] Middleware de tratativa de erros;

---

### TO DO

- [ ] Instalar Zod para validação dos dados das requisições;
- [ ] Atualizar documentação Swagger;
- [ ] Recuperação de senha;
- [ ] Containers no docker para o BD e aplicação;
- [ ] Alterar BD para o postgress;

- **Futuro**:
  - [ ] Login social com Google;

<!-- ## Há fazer!

- Separar model de refresh token de user e admin;
- Alterar nomenclatura de Users para User;
- Alterar model de user retirando o campo googleId;
- Alterar model de admin e deixar o campo refreshToken como o de user;
- Corrigir código de `GenerateToken` e `GenerateRefreshToken`;
- Rever a lógica do Refresh Token para criar um novo token e um novo refresh token, cada vez que o refresh token for usado, e caso expire o usuário deverar logar novamente; -->
