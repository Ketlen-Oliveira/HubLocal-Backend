# Teste Novos Devs HubLocal

Objetivo do projeto é realizar operações CRUD de usuários, empresas e de locais pertencentes a cada empresa. Para realizar essas funcionalidades é preciso que o usuário esteja cadastrado no sistema para poder efetuar login e o token retornado dará acesso as demais aplicabilidades do sistema.

# Linguagem, Framework e tecnologias utilizadas para o desenvolvimento:

| PostgreSQL
| pgAdmin 4
| NestJs
| TypeORM
| Typescript
| JWT
| Passport

# Instruções de instalação:

1. Para conseguir rodar o projeto é necessário ter o nodejs e npm instalados nas versões: node - 18.12.1 | npm - 8.19.2
2. Para o banco de dados, é utilizado o pgAdmin4 e em seguida é preciso criar a database "hubLocal_database" para realizar a conexão com ela, ela deve estar dentro do owner "postgres". O host deve está como "localhost", port: 5432, username "postgres", senha do postgres para conseguir acessar é 1234.

Exemplo de criação da database no pgAdmin:
CREATE DATABASE hubLocal_database
WITH
OWNER = postgres
ENCODING = 'UTF8'
CONNECTION LIMIT = -1
IS_TEMPLATE = False;

3. É necessário realizar o clone do repositório, abrir na IDE, o qual foi utilizado o vscode, abrir um terminal e rodar o comando: 'npm i' para realizar a instalação das dependências.

4. Em seguida, rodar o comando 'npm run start:dev' no terminal para iniciar a aplicação

5. Sendo esperado não ocorrer nenhum erro, pode-se ser realizado os testes (foi utilizado o postman, por exemplo)

6. Rotas utilizadas para Usuarios, Empresas e Locais:
   Somente a rota de create new usuario não utiliza o token já que o usuário ainda não está cadastrado no nosso banco de dados.
   Então não precisa do token nos Headers.Authorization, apenas os demais.

# Usuarios:

1. Create new usuario: http://localhost:3005/api/hub/usuarios/add
   Body:
   {
   "name": "hubLocal",
   "email": "hubLocal@gmail.com",
   "password": "Hublocal123@"
   }

2. Login: http://localhost:3005/api/auth/login
   exemplo:
   Body:
   {
   "email": "hubLocal@gmail.com",
   "password": "Hublocal123@"
   }
   Após realizar login com as credenciais do usuário cadastrado deve-se copiar o token retornado para poder prosseguir com o cadastro das informações para empresas e locais

3. Get todos usuários: http://localhost:3005/api/hub/usuarios/listarTodos

4. Get um usuário por Id: http://localhost:3005/api/hub/usuarios/:userId

5. Update usuário: http://localhost:3005/api/hub/usuarios/:idUsuario
   Body:
   {
   "name": "hubLocal atualiza",
   "email": "hubLocal22@gmail.com"
   }

6. Delete usuário: http://localhost:3005/api/hub/usuarios/:idUsuario

# Empresas:

1. Create new empresa: http://localhost:3005/api/hub/empresas/add
   Body:
   {
   "userId": "idUsuarioDaRequisicaoAnterior",
   "name": "teste hubLocal",
   "website": "https://hublocal.com",
   "cnpj": "12.654.098/0001-33"
   }

2. Get todas empresas: http://localhost:3005/api/hub/empresas

3. Get empresa por Id: http://localhost:3005/api/hub/empresas/:companyId

4. Get empresa por usuarioId: http://localhost:3005/api/hub/empresas/empresa/idUsuario

5. Update empresa: http://localhost:3005/api/hub/empresas/:companyId
   Body:
   {
   "name": "hubLocal atualizado",
   "website": "https://google.com",
   "cnpj": "12.654.098/0001-33"
   }

6. Delete empresa: http://localhost:3005/api/hub/empresas/:companyId

# Locais:

1. Create new locais: http://localhost:3005/api/hub/locais/add
   Body:
   {
   "companyId": "IdEmpresaRetornadoPorRequestAnterior",
   "name": "endereço hubLocal",
   "cep": "69099-001",
   "street": "rua 1",
   "number": "111",
   "neighborhood": "Bairro 1",
   "city": "Cidade 1",
   "UF": "Estado 1"
   }

2. Get todos os locais: http://localhost:3005/api/hub/locais/listarTodos

3. Get locais por id: http://localhost:3005/api/hub/locais/:localId

4. Get todos os locais por empresaId: http://localhost:3005/api/hub/locais/local/:companyId

5. Update locais: http://localhost:3005/api/hub/locais/:localId
   Body:
   {
   "name": "endereço hubLocal",
   "cep": "69099-001",
   "street": "rua atual um",
   "number": "1",
   "neighborhood": "bairro atual um",
   "city": "Cidade atual um",
   "UF": "Estado atual um"
   }

6. Delete locais: http://localhost:3005/api/hub/locais/:localId
