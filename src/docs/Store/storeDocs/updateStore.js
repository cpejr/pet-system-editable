/**
* @swagger
*  /store/{store_id}:
*    put:
*      summary: Atualizar as informações de uma determinada loja
*      parameters:
*       - in: header
*         name: Authorization
*         schema:
*          type: string
*         required: true
*         description: Autorização básica.
*       - in: body
*         name: store_id
*         schema:
*           type: string
*           example:
*             store_id: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
*         required: true
*         description: Id da loja a ser alterada.
*       - in: body
*         name: Body
*         schema:
*          type: object
*          example:
*           company_name: Loja do Giovanni
*           cellphone: 31943287891
*         required: true
*         description: Campos a serem alterados
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
