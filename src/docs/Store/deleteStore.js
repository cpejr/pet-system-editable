/**
* @swagger
*  /store:
*    delete:
*      summary: Deletar loja e usuário
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
*         name: user_id
*         required: true
*         description: Id do usuário a ser deletado a loja.
*      tags: [Store]
*      description: Deletando loja
*      responses:
*       '200':
*        description: User and store were deleted
*       '400':
*        description: err.message
*       '500':
*        description: Internal server error while trying to delete store
*
*/
