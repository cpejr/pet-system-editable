/**
* @swagger
*  /address/{address_id}:
*    get:
*      summary: Retorna um determinado endereço
*      parameters:
*       - in: query_params
*         name: address_id
*         required: true
*         description: Id do endereço a ser localizado.(STRING)
*         schema:
*      tags: [Address]
*      description: Validação para localizar um determinado endereço, passando o seu ID e retornando suas informações.
*      responses:
*       '200':
*        description: Address
*        content:
*          application/json:
*            example:
*              address_id: 428fdkj12-354k-3sdd-9l3m-32lnls3dcb6d,
*              street: Rua das graças,
*              number: 123,
*              neighborhood: Sagrada Família,
*              city: Belo Horizonte,
*              birth_date: 26121980,
*              cep: 30130171,
*              state: Minas Gerais,
*       '404':
*        description: Not Found
*       '500':
*        description: Internal Server Error
*
*/
