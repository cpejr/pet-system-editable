/**
* @swagger
*  /address/:
*    get:
*      summary: Retorna todas os endereços.
*      tags: [Address]
*      description: Validação para localizar um determinado endereço, passando o seu ID e retornando suas informações.
*      responses:
*       '200':
*        description: Addresses
*        content:
*          application/json:
*            example:
*              [{
*                 address_id: 428fdkj12-354k-3sdd-9l3m-32lnls3dcb6d,
*                 street: Rua das graças,
*                 number: 123,
*                 neighborhood: Sagrada Família,
*                 city: Belo Horizonte,
*                 birth_date: 26121980,
*                 cep: 30130171,
*                 state: Minas Gerais,
*               },
*               {
*                 address_id: 428fdkj12-354k-3sdd-9l3m-32lnls3dcb6d,
*                 street: Rua das graças,
*                 number: 123,
*                 neighborhood: Sagrada Família,
*                 city: Belo Horizonte,
*                 birth_date: 26121980,
*                 cep: 30130171,
*                 state: Minas Gerais,
*               }]
*       '404':
*        description: Not Found
*       '500':
*        description: Internal Server Error
*
*/
