/**
* @swagger
*  /subcategory/{subcategory_id}:
*    put:
*      summary: Atualizar as informações de uma subcategoria
*      parameters:
*       - in: query_params
*         name: subcategory_id
*         schema:
*           type: string
*         required: true
*         description: Id da subcategoria a ser alterada.
*       - in: body
*         name: Body
*         schema:
*         required: true
*         description: Campos a serem alterados.(OBJECT)
*      tags: [SubCategories]
*      description: Validação para atualização de um determinada subcategoria
*      responses:
*       '200':
*        description: SubCategory updated
*        content:
*          application/json:
*            example:
*             subcategory_id: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
*             name: Vasilhas para Gatos
*             category_id: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
*       '400':
*        description: No valid session provided
*       '403':
*        description: Unauthorized
*       '500':
*        description: Internal Server Error
*
*/
