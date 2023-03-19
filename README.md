> [Print das execuções do projeto](https://drive.google.com/drive/folders/1MUY6ad7EpryPf9Xf2WMWcHSFyTFumSfg?usp=sharing)

# Teste Novos Devs HubLocal

Objetivo do projeto é realizar operações CRUD de usuários, empresas e de locais pertencentes a cada empresa. Para realizar essas funcionalidades é preciso que o usuário esteja cadastrado no sistema para poder efetuar login e o token retornado dará acesso as demais aplicabilidades do sistema.

# Tecnologias:

| PostgreSQL
| pgAdmin 4
| NestJs
| TypeORM
| Typescript
| JWT
| Passport

# Instruções:

1. Foi utilizado no projeto nodejs e npm nas versões: node - 18.12.1 e npm - 8.19.2
2. Para o banco de dados, é utilizado o pgAdmin4 e em seguida é preciso criar a database "hubLocal_database" para realizar a conexão com ela, ela deve estar dentro do owner "postgres". O host deve está como "localhost", port: 5432, username "postgres", senha do postgres para conseguir acessar é 1234.

Exemplo de criação da database no pgAdmin:

CREATE DATABASE hubLocal_database
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

3. É necessário realizar o clone do repositório 
4. Abrir na IDE
5. Abrir um terminal 
6. Rodar o comando: 'npm i' para realizar a instalação das dependências.
7. Em seguida, rodar o comando 'npm run start:dev' no terminal para iniciar a aplicação
8. Sendo esperado não ocorrer nenhum erro, pode-se ser realizado os testes (foi utilizado o postman, por exemplo)
9. [Rotas utilizadas para Usuarios, Empresas e Locais](https://docs.google.com/presentation/d/1Tms_PCiu75A15e5kbATSSFbefBPmFXzMfg525LkxdyM/edit?usp=sharing)

   Somente a rota de create new usuario não utiliza o token já que o usuário ainda não está cadastrado no nosso banco de dados.
   Então não precisa do token nos Headers.Authorization, apenas os demais.
