/**
* @swagger
*  /address:
*    post:
*      summary: Criação de um usuário
*      requestBody:
*        required: true
*        content:
*         application/json:
*          schema:
*            $ref: '#/components/schemas/Address'
*      parameters:
*        - in: body
*          name: street
*          required: true
*          description: Rua do endereço a ser criado.(STRING)
*          schema:
*        - in: body
*          name: number
*          required: true
*          description: Númeor do endereço a ser criado.(STRING)
*          schema:
*        - in: body
*          name: neighborhood
*          required: true
*          description: Bairro do endereço a ser criado.(STRING)
*          schema:
*        - in: body
*          name: city
*          required: true
*          description: Cidade do endereço a ser criado.(DATE)
*          schema:
*        - in: body
*          name: cep
*          required: true
*          description: CEP do endereço a ser criado.(STRING)
*          schema:
*        - in: body
*          name: state
*          required: true
*          description: Estado do endereço a ser criado.(STRING)
*          schema:
*      tags: [Address]
*      description: Validação para criar endereço através das informações passadas pelo formulário.
*      responses:
*        '200':
*          description: Address created
*        content:
*          application/json:
*            example:
*               street: Rua das graças
*               number: 123
*               neighborhood: Sagrada Família
*               city: Belo Horizonte
*               birth_date: 26121980
*               cep: 30130171
*               state: Minas Gerais
*        '400':
*          description: No valid session provided
*        '500':
*          description: Internal server error while trying to register address
*/
