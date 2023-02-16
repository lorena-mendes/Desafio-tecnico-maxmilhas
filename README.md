# Desafio-técnico-maxmilhas

# Sobre a aplicação

A aplicação consiste em um sistema de controle de CPFs. Foi desenvolvida em `Typescript` e `Node.js` usando o ORM `sequelize` para fazer um `CRUD` de cpfs. Foram desenvolvidos endpoints que estarão conectados ao bando de dados, utilizando o `MySql` com container `Docker` seguindo os princípios de REST. Para um cpf ser incuído com sucesso ao banco de dados ele passa por validações e verificações de duplicidade.

# Requisitos para rodar a aplicação

  Para executar este projeto, você precisará ter o Docker e o Docker Compose instalados no seu sistema. Você pode baixá-los e instalá-los seguindo as instruções na documentação oficial do Docker.

# Como executar a aplicação

  * Depois de extrair o arquivo, fazer a instalação e configuração do MySql deverá ser feita a configuração das variáveis de ambiente no arquivo .env de acordo com as suas credenciais e a porta que irá rodar a aplicação. 
  * Navegue até a pasta raiz do projeto e rode o comando `npm install`e depois `docker-compose up -d`;
  * Inicie a aplicação com o comando `npm run dev`;
  * Com a aplicação rodando, abra outro terminal e execute a migration com o comando `npx sequelize-cli db:migrate`;

# Endpoints

## US01 - Adiciona um CPF na lista restrita
  
  * Método POST;
  * URL - `/cpf`;
  * Data Params - `{ "cpf": "64852893055" }`;
  * Deve ser adicionado na lista um CPF válido, sem dígitos repetidos e sem máscara;
  * Se for adicionado um CPF inválido deverá retornar uma exceção do tipo: 
  ```json
{
  "type": "InvalidCpfException",
  "message": "CPF is not valid."
}
  ```
  * Se um CPF existir na lista deve retornar uma exceção do tipo: 
  ```json
{
  "type": "ExistsCpfException",
  "message": "CPF already registered."
}
  ```
  * O CPF adicionado na lista deve conter a data de inclusão no formato ISO 8601 - UTC: 
  ```json
{
  "id": 2,
  "cpf": "53229870026",
  "created_at": "2023-02-16T14:04:05.811Z"
}
  ```
## US02 - Verifica de um determinado CPF está na lista restrita

  * Método GET;
  * URL - `/cpf/{cpf}`;
  * Se o CPF não existir deverá retornar uma exceção do tipo: 
  ```json
{
  "type": "NotFoundCpfException",
  "message": "CPF not found."
}
  ```
  * Se for um CPF inválido deverá retornar uma exceção do tipo: 
  ```json
{
  "type": "InvalidCpfException",
  "message": "CPF is not valid."
}
  ```
  * Se o CPF existir deve retornar o CPF e a data de criação no formato ISO 8601 - UTC:
  ```json
{
  "id": 2,
  "cpf": "53229870026",
  "created_at": "2023-02-16T14:04:05.811Z"
}
  ```
## US03 - Remover um CPF da lista restrita

  * Método DELETE;
  * URL - `/cpf/{cpf}`;
  * Se o CPF não existir deverá retornar uma exceção do tipo: 
  ```json
{
  "type": "NotFoundCpfException",
  "message": "CPF not found."
}
  ``` 
  * Se for um CPF inválido deverá retornar uma exceção do tipo: 
  ```json
{
  "type": "InvalidCpfException",
  "message": "CPF is not valid."
}
  ```
  * Se a requisição der certo deverá ter o retorno:
  ```json
{
  "message": "Cpf removed successfully."
}

 ```
## US04 - Visualizar todos os CPFs que estão na lista restrita:
  
  * Se nenhum CPF existir deverá retornar um array vazio;
  * Retorno esperado da lista de CPFs: 
  ```json
[
  {
    "id": 1,
    "cpf": "53229870026",
    "created_at": "2023-02-16T14:04:05.000Z"
  },
  {
    "id": 2,
    "cpf": "44274219038",
    "created_at": "2023-02-16T14:16:28.000Z"
  },
  {
    "id": 3,
    "cpf": "91754508014",
    "created_at": "2023-02-16T14:16:34.000Z"
  }
]

 ```
