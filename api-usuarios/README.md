# API Connect — Adrielly Proti

## Objetivo

API RESTful de gerenciamento de usuários desenvolvida como MVP para uma startup. Permite criar, listar, atualizar e remover usuários via requisições HTTP, seguindo os princípios REST.

## Tecnologias Utilizadas

- Node.js
- Express.js
- Nodemon (ambiente de desenvolvimento)

## Como Executar Localmente

1. Clone o repositório:
```bash
   git clone https://github.com/adriellyproti/api-connect-adrielly-proti.git
```

2. Acesse a pasta do projeto:
```bash
   cd api-connect-adrielly-proti
```

3. Instale as dependências:
```bash
   npm install
```

4. Inicie o servidor em modo de desenvolvimento:
```bash
   npm run dev
```

A API estará disponível em: `http://localhost:3000`

---

## Endpoints

### Usuários

| Método | Endpoint         | Descrição                        | Body (JSON)                                              |
|--------|------------------|----------------------------------|----------------------------------------------------------|
| GET    | /usuarios        | Retorna todos os usuários        | —                                                        |
| POST   | /usuarios        | Cria um novo usuário             | `{ "nome_usuario_auth": "Nome", "email_usuario_auth": "email@email.com" }` |
| GET    | /usuarios/:id    | Retorna um usuário pelo ID       | —                                                        |
| PUT    | /usuarios/:id    | Atualiza um usuário pelo ID      | `{ "nome_usuario_auth": "Novo Nome", "email_usuario_auth": "novo@email.com" }` |
| DELETE | /usuarios/:id    | Remove um usuário pelo ID        | —                                                        |

### Exemplos de Respostas

**POST /usuarios — 201 Created**
```json
{
  "data": {
    "id_usuario_auth": 4,
    "nome_usuario_auth": "Ana",
    "email_usuario_auth": "ana@email.com"
  }
}
```

**POST /usuarios — 400 Bad Request (campos ausentes)**
```json
{
  "error": "Nome e e-mail são obrigatórios"
}
```

**GET /usuarios/:id — 404 Not Found**
```json
{
  "mensagem": "Usuário não encontrado"
}
```