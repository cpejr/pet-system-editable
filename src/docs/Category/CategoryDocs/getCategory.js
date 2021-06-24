/**
* @swagger
*  /category/{category_id}:
*    get:
*      summary: Retorna uma determinada categoria e suas subcategorias
*      parameters:
*       - in: query_params
*         name: category_id
*         required: true
*         description: Id da categoria a ser localizado.(STRING)
*         schema:
*      tags: [Categories]
*      description: Validação para localizar uma determinado categoria e suas subcategorias, passando o seu ID e retornando suas informações.
*      responses:
*       '200':
*        description: Category
*        content:
*          application/json:
*            example:
*              name: Rações
*              id: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
*              subcategories: [{id: 8dsa8292j-4kn4-4bad-9bdd-2b0d7b3dcb6d, name: Ração Premium}]
*       '404':
*        description: Not Found
*       '500':
*        description: Internal server error while trying to find category
*
*/
