/**
* @swagger
*  /store/{store_id}:
*    put:
*      summary: Atualizar as informações de uma determinada loja
*      parameters:
*       - in: query_params
*         name: store_id
*         required: true
*         description: Id da loja a ser alterada.(STRING)
*         schema:
*       - in: body
*         name: Body
*         required: true
*         description: Campos a serem alterados.(OBJECT)
*         schema:
*      tags: [Store]
*      description: Validação para atualização de uma determinada loja
*      responses:
*       '200':
*        description: Store updated
*        content:
*          application/json:
*            example:
*             store_id: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
*             company_name: Loja do Giovanni
*             cellphone: 31943287891
*       '404':
*        description: Not Found
*       '403':
*        description: Unauthorized
*       '500':
*        description: Internal server error while trying to update store
*
*/
