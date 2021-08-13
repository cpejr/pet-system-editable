/**
* @swagger
*  /category/{category_id}:
*    put:
*      summary: Atualizar as informações de uma categoria
*      parameters:
*       - in: query_params
*         name: category_id
*         schema:
*           type: string
*         required: true
*         description: Id da categoria a ser alterada.
*       - in: body
*         name: Body
*         schema:
*         required: true
*         description: Campos a serem alterados.(OBJECT)
*      tags: [Categories]
*      description: Validação para atualização de um determinada categoria
*      responses:
*       '200':
*        description: Category updated
*        content:
*          application/json:
*            example:
*             category_id: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
*             name: Vasilhas
*       '400':
*        description: No valid session provided
*       '403':
*        description: Unauthorized
*       '500':
*        description: Internal Server Error
*
*/
