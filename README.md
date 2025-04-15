# CRUD-USERS-API

## Tecnologias utilizadas

- **Node.js**
- **Typescript**
- **Express**
- **MongoDB**
- **Docker Compose**

## Conceitos utilizados

- **SOLID**
- **Injeção de Dependência (Dependency Injection)**

## Entidades

<pre> User {
    id: string; 
    name: string; 
    email: string; 
    password: string; } 
</pre>

## Rotas

- GET /users - retorna os usuários salvos no banco
- POST /users - cria um usuário
- PATCH /users/:id - atualiza um usuário
- DELETE /users/:id - deleta um usuário
