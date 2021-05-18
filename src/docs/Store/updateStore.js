/**
* @swagger
*  /store:
*    put:
*      summary: Atualizar loja
*      requestBody:
*         required: true
*         content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Store'
*      parameters:
*       - in: header
*         name: Authorization
*         schema:
*          type: string
*         required: true
*         description: Autorização básica.
*       - in: body
*         name: store
*         required: true
*         description: Loja com o campo a ser alterado.
*       - in: body
*         name: store_id
*         required: true
*         description: Id da Loja a ser atualizada.
*      tags: [Store]
*      description: Atualizando loja
*      responses:
*       '200':
*        description: Store updated
*       '400':
*        description: err.message
*       '500':
*        description: Internal server error while trying to update store
*
*/
