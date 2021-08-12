/**
* @swagger
*  /address/{address_id}:
*    delete:
*      summary: Deletar um determinado endereço
*      parameters:
*       - in: query_params
*         name: address_id
*         required: true
*         description: Id do endereço a ser deletado.(STRING)
*         schema:
*      tags: [Address]
*      description: Validação para apagar um determinado endereço de acordo com seu código de identificação(address_id).
*      responses:
*       '200':
*        description: Address deleted
*        content:
*          application/json:
*            example:
*              address_id: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
*       '400':
*        description: No valid session provided
*       '403':
*        description: Unauthorized
*       '404':
*        description: Not Found
*       '500':
*        description: Internal server error while trying to delete address
*
*/
