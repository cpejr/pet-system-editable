/**
* @swagger
*  /category/{category_id}:
*    delete:
*      summary: Deletar uma determinada categoria
*      parameters:
*       - in: query_params
*         name: category_id
*         required: true
*         description: Id da categoria a ser deletada.(STRING)
*         schema:
*      tags: [Categories]
*      description: Validação para apagar uma determinada categoria de acordo com seu código de identificação(category_id). Categorias só podem ser apagados pelo administrador.
*      responses:
*       '200':
*        description: Category deleted
*        content:
*          application/json:
*            example:
*              category_id: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
*       '400':
*        description: No valid session provided
*       '403':
*        description: Unauthorized
*       '404':
*        description: Not Found
*       '500':
*        description: Internal server error while trying to delete category
*
*/
