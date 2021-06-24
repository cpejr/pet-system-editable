/**
* @swagger
*  /subcategory/{subcategory_id}:
*    delete:
*      summary: Deletar uma determinada subcategoria
*      parameters:
*       - in: query_params
*         name: subcategory_id
*         required: true
*         description: Id da subcategoria a ser deletada.(STRING)
*         schema:
*      tags: [SubCategories]
*      description: Validação para apagar uma determinada subcategoria de acordo com seu código de identificação(subcategory_id). Categorias só podem ser apagados pelo administrador.
*      responses:
*       '200':
*        description: Subcategory deleted
*        content:
*          application/json:
*            example:
*              subcategory_id: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
*       '400':
*        description: No valid session provided
*       '403':
*        description: Unauthorized
*       '404':
*        description: Not Found
*       '500':
*        description: Internal server error while trying to delete subcategory
*
*/
