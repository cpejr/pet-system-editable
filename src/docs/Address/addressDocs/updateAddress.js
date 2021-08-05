/**
* @swagger
*  /address/{address_id}:
*    put:
*      summary: Atualizar as informações de um endereço
*      parameters:
*       - in: query_params
*         name: address_id
*         schema:
*           type: string
*         required: true
*         description: Id do endereço a ser alterado.
*       - in: body
*         name: Body
*         schema:
*         required: true
*         description: Campos a serem alterados.(OBJECT)
*      tags: [Address]
*      description: Validação para atualização de um determinado endereço
*      responses:
*       '200':
*        description: Address updated
*        content:
*          application/json:
*            example:
*             address_id: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
*             street: Matias Cardoso
*       '400':
*        description: No valid session provided
*       '403':
*        description: Unauthorized
*       '500':
*        description: Internal server error while trying to update address
*
*/
